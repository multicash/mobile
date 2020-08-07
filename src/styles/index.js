export const cards = (isDarkScheme) => {
  return {
    display: 'flex',
    flex: 1,
    backgroundColor: isDarkScheme ? 'black' : 'white',
    shadowColor: isDarkScheme ? '#270333' : '#c0c0ff',
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
