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
