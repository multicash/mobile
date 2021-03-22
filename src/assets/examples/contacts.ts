import UUID from '@/core/support/UUID'

export default [
  {
    identifier: UUID.create(),
    name: 'Kirsten Larsen',
    tagOrAddress: '@KirstenLn1992',
    isFavorite: true,
    icon: { name: 'person-circle', color: '#a7fb00' }
  },
  {
    identifier: UUID.create(),
    name: 'Birthe Lyberth',
    tagOrAddress: '@BLyberth',
    isFavorite: false,
    icon: { name: 'cloud-circle', color: '#eaee18' }
  },
  {
    identifier: UUID.create(),
    name: 'Fletcher Faubert',
    tagOrAddress: '@fF',
    isFavorite: false,
    icon: { name: 'person-circle', color: '#3b28f3' }
  },
  {
    identifier: UUID.create(),
    name: 'Maik Fisher',
    tagOrAddress: '@MMFisher',
    isFavorite: true,
    icon: { name: 'navigate-circle', color: '#00ffb2' }
  },
  {
    identifier: UUID.create(),
    name: 'Pola Cordova Guzmán',
    tagOrAddress: '@cordovaV1',
    isFavorite: false,
    icon: { name: 'planet', color: '#c807a9' }
  }
]
