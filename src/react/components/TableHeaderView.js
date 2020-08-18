// eslint-disable-next-line no-unused-vars
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (isDarkScheme, title, subtitle, image) => {
  const styles = StyleSheet.create(stylesStore(isDarkScheme))

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Image style={styles.image} source={image}/>
      <Text style={styles.subtitle}>{ subtitle }</Text>
    </View>
  )
}

const stylesStore = (isDarkScheme) => {
  return {
    container: {
      flex: 1,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: isDarkScheme ? 'white' : 'black',
      marginVertical: 5
    },
    subtitle: {
      fontSize: 12,
      color: isDarkScheme ? '#b3aabe' : '#72677b',
      marginVertical: 5
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginVertical: 5
    }
  }
}
