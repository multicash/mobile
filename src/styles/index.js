export const cards = (isDarkScheme) => {
  return {
    display: 'flex',
    backgroundColor: isDarkScheme ? '#2c2e36' : 'white',
    shadowColor: isDarkScheme ? 'black' : '#c0c0ff',
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    elevation: 10,
    borderRadius: 20,
    padding: 20
  }
}

export const text = (isDarkTheme) => {
  return {
    color: isDarkTheme ? 'white' : 'black'
  }
}
