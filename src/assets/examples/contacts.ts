import UUID from '@/core/support/UUID'

export default [
  {
    identifier: UUID.create(),
    name: 'Kirsten Larsen',
    tagOrAddress: '@KirstenLn1992',
    isFavorite: true,
    icon: { name: 'person', color: '#931A5A' }
  },
  {
    identifier: UUID.create(),
    name: 'Birthe Lyberth',
    tagOrAddress: '@BLyberth',
    isFavorite: false,
    icon: { name: 'car', color: '#FFDD57' }
  },
  {
    identifier: UUID.create(),
    name: 'Fletcher Faubert',
    tagOrAddress: '@fF',
    isFavorite: false,
    icon: { name: 'logo-playstation', color: '#00B0EE' }
  },
  {
    identifier: UUID.create(),
    name: 'Maik Fisher',
    tagOrAddress: '@MMFisher',
    isFavorite: true,
    icon: { name: 'airplane', color: '#00AE5A' }
  },
  {
    identifier: UUID.create(),
    name: 'Pola Cordova Guzmán',
    tagOrAddress: '@cordovaV1',
    isFavorite: false,
    icon: { name: 'planet', color: '#F14668' }
  }
]
