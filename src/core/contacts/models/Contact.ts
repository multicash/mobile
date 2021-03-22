export default interface Contact {
  identifier: string
  name: string
  tagOrAddress: string
  isFavorite: boolean
  icon: {
    name: string
    color: string
  }
}
