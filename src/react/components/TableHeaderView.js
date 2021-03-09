// eslint-disable-next-line no-unused-vars
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (isDarkScheme, title, subtitle, image) => {
  const styles = StyleSheet.create(stylesStore(isDarkScheme))

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <Text style={styles.title}>{ title }</Text>
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
      fontSize: 16,
      color: isDarkScheme ? '#b3aabe' : '#4a4350',
      marginVertical: 5,
      textAlign: 'center'
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 5
    }
  }
}
