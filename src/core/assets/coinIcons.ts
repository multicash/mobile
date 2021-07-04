/*
  MultiCash Mobile
  Copyright (C) 2021  Swen van Zanten

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

const CoinIcons: any = {
  MCX: () => require('@/assets/coins/MCX.png'),
  BTC: () => require('@/assets/coins/BTC.png'),
  ETH: () => require('@/assets/coins/ETH.png')
}

export const resolveIcon = (name: string) => {
  const icon = CoinIcons[name] || (() => null)

  if (!icon) {
    return null
  }

  return icon()
}

export default CoinIcons
