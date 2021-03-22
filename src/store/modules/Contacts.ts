import { Store } from 'vuex'
import Contact from '@/core/contacts/models/Contact'

const state: Contact[] = []

const mutations = {
  ADD_CONTACT (state: Contact[], contact: Contact): void {
    state.push(contact)
  },

  REMOVE_CONTACT (state: Contact[], contact: Contact): void {
    state.splice(state.indexOf(contact), 1)
  },

  UPDATE_CONTACT (state: Contact[], contact: Contact): void {
    const index = state.findIndex(stateContact => {
      return stateContact.identifier === contact.identifier
    })

    if (state[index]) {
      state[index].name = contact.name
      state[index].tagOrAddress = contact.tagOrAddress
      state[index].isFavorite = contact.isFavorite
      state[index].icon.name = contact.icon.name
      state[index].icon.color = contact.icon.color
    }
  }
}

const actions = {
  addContact (context: Store<Contact[]>, contact: Contact): void {
    context.commit('ADD_CONTACT', contact)
  },

  removeContact (context: Store<Contact[]>, contact: Contact): void {
    context.commit('REMOVE_CONTACT', contact)
  },

  getContact (context: Store<Contact[]>, identifier: string): Contact|null {
    for (const contact of context.state) {
      if (contact.identifier === identifier) {
        return contact
      }
    }

    return null
  },

  updateContact (context: Store<Contact[]>, contact: Contact): void {
    context.commit('UPDATE_CONTACT', contact)
  }
}

const getters = {
  contacts (state: Contact[]): Contact[] {
    return state
  },

  hasContacts (state: Contact[]): boolean {
    return state.length > 0
  }
}

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
