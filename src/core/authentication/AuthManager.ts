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

import Vue from 'vue-native-core'
import { NavigationContainerRef } from '@react-navigation/native'

const Log = Logger.extend('AUTH')

export default class AuthManager {
  protected $eventBus: Vue
  protected navigation?: NavigationContainerRef

  constructor ($eventBus: Vue) {
    this.$eventBus = $eventBus
  }

  public authenticate (level: string = 'view', params: object): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (undefined === this.navigation) {
        Log.error('Navigator hasn\'t been set on AuthManager')

        reject(new Error('Navigator hasn\'t been set on AuthManager'))
      }

      this.navigation!.navigate(
        (level === 'view' ? 'pin' : 'authenticate'),
        { showCloseButton: level === 'view', ...params }
      )

      this.$eventBus.$once('authenticated', () => {
        this.$eventBus.$off('authenticationAborted')

        Log.info('Authenticated successfully')

        resolve(true)
      })

      this.$eventBus.$once('authenticationAborted', () => {
        this.$eventBus.$off('authenticated')

        Log.info('Authentication aborted')

        resolve(false)
      })
    })
  }

  public setNavigationComponent (navigation: NavigationContainerRef): void {
    this.navigation = navigation
  }
}
