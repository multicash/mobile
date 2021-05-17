import { Platform } from 'react-native'

export const cards = (isDarkScheme) => {
  return {
    display: 'flex',
    backgroundColor: isDarkScheme ? '#2c2e36' : 'white',
    borderRadius: 20,
    padding: 20
  }
}

export const text = (isDarkScheme) => {
  return {
    color: isDarkScheme ? '#ffffff' : '#000000'
  }
}

export const subtitle = (isDarkScheme) => {
  return {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: isDarkScheme ? '#a0a3bd' : '#6e7086'
  }
}

export const sectionTitle = (isDarkScheme) => {
  return {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: isDarkScheme ? '#aeb0c1' : '#303034'
  }
}

export const sectionFooter = (isDarkScheme) => {
  return {
    color: isDarkScheme ? '#9a9baa' : '#63636d'
  }
}

export const pageTitle = (isDarkScheme) => {
  return {
    fontSize: 30,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    textAlign: 'center',
    color: isDarkScheme ? '#aeb0c1' : '#303034'
  }
}

export const pageSubtitle = (isDarkScheme) => {
  return {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: isDarkScheme ? '#a0a3bd' : '#8386a0'
  }
}
