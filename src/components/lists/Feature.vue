<template>
  <view
    :style="styles.feature"
    :key="title"
  >
    <image :style="styles.featureIcon" :source="image"/>
    <view :style="styles.featureContent">
      <text :style="styles.featureTitle">{{ title }}</text>
      <text :style="styles.featureDescription">{{ description }}</text>
    </view>
  </view>
</template>

<script>
import { sectionFooter, sectionTitle } from '@/core/support/styles'

export default {
  name: 'Feature',

  computed: {
    styles () {
      return styleStore(this.isDarkScheme)
    }
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: Number,
      required: true
    }
  }
}

const styleStore = (isDarkScheme) => {
  return {
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10
    },

    featureIcon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginRight: 10
    },

    featureContent: {
      flex: 1
    },

    featureTitle: {
      ...sectionTitle(isDarkScheme),
      paddingBottom: 2.5
    },

    featureDescription: {
      ...sectionFooter(isDarkScheme)
    }
  }
}
</script>
