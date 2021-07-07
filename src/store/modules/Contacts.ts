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
