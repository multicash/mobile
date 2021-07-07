/*
  MultiCash Mobile
  Copyright (C) 2021  MultiCash Developers

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// eslint-disable-next-line no-unused-vars
import React, { ReactElement } from 'react'
import { View, Text, Image, StyleSheet, ImageURISource } from 'react-native'
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
