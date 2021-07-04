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

import { Store } from 'vuex'

interface ApplicationOptions {
  unlock: {
    application: boolean
    restoreKey: boolean
    export: boolean
  }
}

const state: ApplicationOptions = {
  unlock: {
    application: false,
    restoreKey: false,
    export: false
  }
}

const mutations = {
  SET_UNLOCK_APPLICATION (state: ApplicationOptions, value: boolean): void {
    state.unlock.application = value
  },

  SET_UNLOCK_RESTORE_KEY (state: ApplicationOptions, value: boolean): void {
    state.unlock.restoreKey = value
  },

  SET_UNLOCK_EXPORT (state: ApplicationOptions, value: boolean): void {
    state.unlock.export = value
  }
}

const actions = {
  setUnlockApplication (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_APPLICATION', value)
  },

  setUnlockRestoreKey (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_RESTORE_KEY', value)
  },

  setUnlockExport (context: Store<ApplicationOptions>, value: boolean): void {
    context.commit('SET_UNLOCK_EXPORT', value)
  }
}

const getters = {
  applicationOptions (state: ApplicationOptions): ApplicationOptions {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
