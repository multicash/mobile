<!--MultiCash Mobile-->
<!--Copyright (C) 2021  MultiCash Developers-->

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
  <view :style="styles.wordsGrid">
    <view :style="styles.wordContainer" v-for="(word, i) in words" :key="word + i">
      <view :style="styles.wordNumber">
        <text :style="styles.number">{{ i + 1 }}</text>
      </view>
      <text :style="styles.word">{{ word }}</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'RestoreKeyGridView',

  props: ['words'],

  computed: {
    styles () {
      return stylesStore(this.isDarkScheme)
    }
  }
}

const stylesStore = (isDarkScheme) => {
  return {
    wordsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: 20
    },

    wordContainer: {
      backgroundColor: isDarkScheme ? 'black' : 'white',
      width: '30%',
      borderRadius: 5,
      marginBottom: 10,
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'row',
      overflow: 'hidden'
    },

    wordNumber: {
      backgroundColor: '#32b680',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },

    number: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold'
    },

    word: {
      flex: 1,
      textAlign: 'center',
      paddingHorizontal: 5,
      paddingVertical: 10,
      color: isDarkScheme ? 'white' : 'black'
    }
  }
}
</script>
