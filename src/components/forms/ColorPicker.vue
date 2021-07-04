<!--MultiCash Mobile-->
<!--Copyright (C) 2021  Swen van Zanten-->

<!--This program is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU General Public License as published by-->
<!--the Free Software Foundation, either version 3 of the License, or-->
<!--any later version.-->

<!--This program is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the-->
<!--GNU General Public License for more details.-->

<!--You should have received a copy of the GNU General Public License-->
<!--along with this program.  If not, see <https://www.gnu.org/licenses/>.-->

<template>
  <view
    :onLayout="onLayout"
    :style="styles.containerOuter"
  >
    <view :style="styles.container">
      <linear-gradient
        :colors="['red', '#ff0', 'lime', 'cyan', 'blue', '#f0f', 'red']"
        :style="styles.linearGradient"
        :start="{ x: 0, y: 0.5 }"
        :end="{ x: 1, y: 0.5 }"
      />
      <draggable
        :x="(layout.width / 2)"
        :y="-5"
        :minY="-5"
        :maxY="-5"
        :minX="-5"
        :maxX="layout.width + 5"
        :style="{ position: 'absolute' }"
        :onPressIn="(event) => $emit('onDrag', event)"
        :onDrag="onDrag"
        :onDragRelease="onDragRelease"
      >
        <view :style="styles.colorSelector" />
      </draggable>
    </view>
  </view>
</template>

<script>
import LinearGradient from 'react-native-linear-gradient'
import Draggable from 'react-native-draggable'

export default {
  name: 'ColorPicker',

  components: {
    LinearGradient,
    Draggable
  },

  data () {
    return {
      selectorPosition: 20,
      layout: { x: 0, y: 0, width: 0, height: 0 },
      colors: [
        [
          0,
          [255, 0, 0]
        ],
        [
          16.6666666666,
          [240, 255, 15]
        ],
        [
          33.3333333333,
          [0, 255, 0]
        ],
        [
          50,
          [0, 255, 255]
        ],
        [
          66.6666666666,
          [0, 0, 255]
        ],
        [
          83.3333333333,
          [255, 15, 240]
        ],
        [
          100,
          [255, 0, 0]
        ]
      ]
    }
  },

  props: {
    enabled: {
      type: Boolean,
      value: false
    }
  },

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  },

  methods: {
    onLayout (event) {
      const { x, y, width, height } = event.nativeEvent.layout
      this.layout.x = x
      this.layout.y = y
      this.layout.width = width
      this.layout.height = height
    },

    onDrag (event, gestureState) {
      this.$emit('onDrag', { event, gestureState })

      const normalizedLocation = gestureState.moveX - (event.nativeEvent.locationX / 2)
      const normalizedPosition = Math.min(Math.max(parseInt(((normalizedLocation - 5) / (this.layout.width - (-5))) * 100), 1), 100)

      let colorRange = []
      for (let index = 0; index < this.colors.length; index++) {
        const value = this.colors[index]
        if (normalizedPosition <= value[0]) {
          colorRange = [index - 1, index]
          break
        }
      }

      // Get the two closest colors
      const firstColor = this.colors[colorRange[0]][1]
      const secondColor = this.colors[colorRange[1]][1]

      // Calculate ratio between the two closest colors
      const firstColorX = this.layout.width * (this.colors[colorRange[0]][0] / 100)
      const secondColorX = this.layout.width * (this.colors[colorRange[1]][0] / 100) - firstColorX
      const sliderX = this.layout.width * (normalizedPosition / 100) - firstColorX
      const ratio = sliderX / secondColorX

      this.$emit('input', `rgb(${this.pickHex(secondColor, firstColor, ratio).join()})`)
    },

    pickHex (color1, color2, weight) {
      const w1 = ((weight * 2 - 1) + 1) / 2
      const w2 = 1 - w1

      return [
        Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)
      ]
    },

    onDragRelease (...params) {
      this.$emit('onDragRelease', { ...params })
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    containerOuter: {
      borderRadius: 10,
      overflow: 'visible'
    },

    container: {
      backgroundColor: isDarkScheme ? 'black' : 'darkgrey',
      borderRadius: 10,
      padding: 5,
      overflow: 'visible'
    },

    linearGradient: {
      borderRadius: 5,
      justifyContent: 'center',
      height: 60
    },

    colorSelector: {
      zIndex: 1000,
      borderColor: isDarkScheme ? 'black' : 'white',
      borderWidth: 3,
      borderRadius: 20,
      width: 20,
      height: 80
    }
  }
}
</script>
