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

const WalletIcons: any = {
  // Money
  wallet: () => require('@/assets/wallet.png'),
  coinWallet: () => require('@/assets/coin-wallet.png'),
  purse: () => require('@/assets/purse.png'),
  moneyBox: () => require('@/assets/money-box.png'),
  gift: () => require('@/assets/gift.png'),
  safe: () => require('@/assets/safe.png'),
  treasureChest: () => require('@/assets/treasure-chest.png'),
  moneyBag: () => require('@/assets/money-bag.png'),
  donation: () => require('@/assets/donation.png'),
  deposit: () => require('@/assets/deposit.png'),
  money: () => require('@/assets/money.png'),
  stocksGrowth: () => require('@/assets/stocks-growth.png'),
  notesAndCoins: () => require('@/assets/notes-and-coins.png'),

  // Other
  newEmblem: () => require('@/assets/new.png'),
  newYears: () => require('@/assets/new-years.png'),
  qrCode: () => require('@/assets/qr-code.png'),
  protect: () => require('@/assets/protect.png'),

  // Home
  home: () => require('@/assets/home.png'),
  bungalow: () => require('@/assets/bungalow.png'),
  garden: () => require('@/assets/garden.png'),
  dayCare: () => require('@/assets/day-care.png'),
  pacifier: () => require('@/assets/pacifier.png'),
  crib: () => require('@/assets/crib.png'),
  dog: () => require('@/assets/dog.png'),
  cat: () => require('@/assets/cat.png'),
  washingMachine: () => require('@/assets/washing-machine.png'),

  // Travel
  hotel: () => require('@/assets/hotel.png'),
  bed: () => require('@/assets/bed.png'),
  skiResort: () => require('@/assets/ski-resort.png'),

  // Clothes
  clothes: () => require('@/assets/clothes.png'),
  winterBoots: () => require('@/assets/winter-boots.png'),
  panamaHat: () => require('@/assets/panama-hat.png'),
  jewelry: () => require('@/assets/jewelry.png'),

  // Hardware
  macClient: () => require('@/assets/mac-client.png'),
  tv: () => require('@/assets/tv.png'),
  networkCard: () => require('@/assets/network-card.png'),
  laptop: () => require('@/assets/laptop.png'),

  // Transport
  car: () => require('@/assets/car.png'),
  bicycle: () => require('@/assets/bicycle.png'),
  scooter: () => require('@/assets/scooter.png'),
  motorcycle: () => require('@/assets/motorcycle.png'),
  airplane: () => require('@/assets/airplane.png'),
  bus: () => require('@/assets/bus.png'),
  train: () => require('@/assets/train.png'),
  railcar: () => require('@/assets/railcar.png'),
  motorbikeHelmet: () => require('@/assets/motorbike-helmet.png'),

  // Food
  pineapple: () => require('@/assets/pineapple.png'),
  groupOfFruits: () => require('@/assets/group-of-fruits.png'),
  greekSalad: () => require('@/assets/greek-salad.png'),
  bagel: () => require('@/assets/bagel.png'),
  foodAndWine: () => require('@/assets/food-and-wine.png'),
  hamburger: () => require('@/assets/hamburger.png'),
  salamiPizza: () => require('@/assets/salami-pizza.png'),
  sushi: () => require('@/assets/sushi.png'),

  // Entertainment
  themePark: () => require('@/assets/theme-park.png'),
  partyBalloons: () => require('@/assets/party-balloons.png'),
  gameController: () => require('@/assets/game-controller.png'),

  // Sport
  americanFootballPlayer: () => require('@/assets/american-football-player.png'),
  jersey: () => require('@/assets/jersey.png'),
  boxingGlove: () => require('@/assets/boxing-glove.png'),
  soccerBall: () => require('@/assets/soccer-ball.png'),
  horsebackRiding: () => require('@/assets/horseback-riding.png'),
  sailBoat: () => require('@/assets/sail-boat.png'),
  paintballGun: () => require('@/assets/paintball-gun.png'),
  lens: () => require('@/assets/lens.png'),

  // Religion
  synagogue: () => require('@/assets/synagogue.png'),
  mosque: () => require('@/assets/mosque.png'),
  church: () => require('@/assets/church.png')
}

export const resolveIcon = (name: string) => {
  const icon = WalletIcons[name] || (() => null)

  if (!icon) {
    return null
  }

  return icon()
}

export default WalletIcons
