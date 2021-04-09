const WalletIcons: any = {
  gift: () => require('@/assets/walletIcons/gift.png'),
  moneyBox: () => require('@/assets/walletIcons/money_box.png'),
  new: () => require('@/assets/walletIcons/new.png'),
  newYears: () => require('@/assets/walletIcons/new_years.png'),
  qrCode: () => require('@/assets/walletIcons/qr_code.png'),
  security: () => require('@/assets/walletIcons/security.png'),
  wallet: () => require('@/assets/walletIcons/wallet.png'),
  walletMoney: () => require('@/assets/walletIcons/wallet_money.png')
}

export const resolveIcon = (name: string) => {
  const icon = WalletIcons[name] || (() => null)

  if (!icon) {
    return null
  }

  return icon()
}

export default WalletIcons
