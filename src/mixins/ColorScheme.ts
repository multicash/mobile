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

import Vue from 'vue-native-core'
import { Appearance, AppState, AppStateStatus } from 'react-native'

interface ColorStore extends Vue {
  colorScheme?: string,
  setColorScheme?: (colorScheme: string) => void
}

interface ColorMixin {
  onAppStateChange?: () => void
  handleAppearanceChange?: () => void
  created: () => void
  destroyed: () => void
  computed: { isDarkScheme (): boolean; isLightScheme (): boolean; colorScheme (): string }
  methods: { handleAppearanceChange (preferences: any): void; onAppStateChange (state: AppStateStatus): void }
}

const store: ColorStore = new Vue({
  data () {
    return {
      colorScheme: Appearance.getColorScheme()
    }
  },
  methods: {
    setColorScheme (colorScheme: string) {
      // @ts-ignore
      this.colorScheme = colorScheme
    }
  }
})

const mixin: ColorMixin = {
  created () {
    AppState.addEventListener('change', this.onAppStateChange!)
    Appearance.addChangeListener(this.handleAppearanceChange!)
  },

  destroyed () {
    AppState.removeEventListener('change', this.onAppStateChange!)
    Appearance.removeChangeListener(this.handleAppearanceChange!)
  },

  computed: {
    colorScheme () {
      return store.colorScheme!
    },

    isDarkScheme () {
      return store.colorScheme === 'dark'
    },

    isLightScheme () {
      return store.colorScheme === 'light'
    }
  },

  methods: {
    handleAppearanceChange (preferences: any): void {
      store.setColorScheme!(preferences.colorScheme)
    },

    onAppStateChange () {
      store.setColorScheme!(Appearance.getColorScheme() || 'light')
    }
  }
}

Vue.mixin(mixin)
