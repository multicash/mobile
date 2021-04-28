export const cards = (isDarkScheme) => {
  return {
    display: 'flex',
    backgroundColor: isDarkScheme ? '#2c2e36' : 'white',
    elevation: 10,
    borderRadius: 20,
    padding: 20
  }
}

export const text = (isDarkTheme) => {
  return {
    color: isDarkTheme ? '#ffffff' : '#000000'
  }
}

export const subtitle = (isDarkTheme) => {
  return {
    fontWeight: '600',
    color: isDarkTheme ? '#a0a3bd' : '#8386a0'
  }
}

export const sectionTitle = (isDarkTheme) => {
  return {
    fontWeight: '600',
    color: isDarkTheme ? '#aeb0c1' : '#303034'
  }
}
