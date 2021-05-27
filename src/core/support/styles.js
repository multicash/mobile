import { Platform } from 'react-native'

export const cards = (isDarkScheme) => {
  return {
    display: 'flex',
    backgroundColor: isDarkScheme ? '#2C2E36' : 'white',
    borderRadius: 20,
    padding: 20
  }
}

export const text = (isDarkScheme) => {
  return {
    color: isDarkScheme ? '#FFFFFF' : '#000000'
  }
}

export const subtitle = (isDarkScheme) => {
  return {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: isDarkScheme ? '#A0A3BD' : '#6E7086'
  }
}

export const sectionTitle = (isDarkScheme) => {
  return {
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: isDarkScheme ? '#AEB0C1' : '#303034'
  }
}

export const sectionFooter = (isDarkScheme) => {
  return {
    color: isDarkScheme ? '#9A9BAA' : '#63636D'
  }
}

export const pageTitle = (isDarkScheme) => {
  return {
    fontSize: 30,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    textAlign: 'center',
    color: isDarkScheme ? '#AEB0C1' : '#303034'
  }
}

export const pageSubtitle = (isDarkScheme) => {
  return {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: isDarkScheme ? '#A0A3BD' : '#8386A0'
  }
}

export const tableSubtitle = (type, isDarkScheme) => {
  const base = {
    backgroundColor: isDarkScheme ? '#191A20' : '#DFE1EE',
    marginTop: 7,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 5,
    overflow: 'hidden'
  }

  switch (type) {
    case 'primary':
      return {
        ...base,
        color: isDarkScheme ? '#B95C8B' : '#931A5A'
      }
    case 'success':
      return {
        ...base,
        color: isDarkScheme ? '#00AE5A' : '#008646'
      }
    default:
      return {}
  }
}
