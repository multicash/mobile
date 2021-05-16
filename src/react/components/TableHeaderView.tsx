// eslint-disable-next-line no-unused-vars
import React, { ReactElement } from 'react'
import { View, Text, Image, StyleSheet, ImageURISource, Platform } from 'react-native'
import { pageSubtitle, pageTitle } from '@/core/support/styles'

export default function <T> (isDarkScheme: boolean, title: string, subtitle: string, image: ImageURISource): ReactElement {
  const styles = StyleSheet.create(stylesStore(isDarkScheme) as any)

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{ title }</Text>
      <Text style={styles.subtitle}>{ subtitle }</Text>
    </View>
  )
}

const stylesStore = (isDarkScheme: boolean) => {
  return {
    container: {
      flex: 1,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      ...pageTitle(isDarkScheme)
    },
    subtitle: {
      ...pageSubtitle(isDarkScheme),
      marginBottom: 0
    },
    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    }
  }
}
