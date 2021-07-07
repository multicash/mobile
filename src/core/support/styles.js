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
