const WalletIcons: any = {
  wallet: () => require('@/assets/walletIcons/wallet.png'),
  moneyBox: () => require('@/assets/walletIcons/money_box.png'),
  gift: () => require('@/assets/walletIcons/gift.png'),
  newYears: () => require('@/assets/walletIcons/new_years.png'),
  security: () => require('@/assets/walletIcons/security.png')
}

export const resolveIcon = (name: string) => {
  const icon = WalletIcons[name] || (() => null)

  if (!icon) {
    return null
  }

  return icon()
}

export default WalletIcons
