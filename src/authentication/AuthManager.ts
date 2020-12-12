import Vue from 'vue-native-core'
import { NavigationContainerRef } from '@react-navigation/native'

export default class AuthManager {
  protected $eventBus: Vue
  protected navigation?: NavigationContainerRef

  constructor ($eventBus: Vue) {
    this.$eventBus = $eventBus
  }

  public authenticate (level: string = 'view'): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (undefined === this.navigation) {
        reject(new Error('Navigator hasn\'t been set on AuthManager'))
      }

      this.navigation!.navigate(
        (level === 'view' ? 'pin' : 'authenticate'),
        { showCloseButton: level === 'view' }
      )

      this.$eventBus.$once('authenticated', () => {
        this.$eventBus.$off('authenticationAborted')

        resolve(true)
      })

      this.$eventBus.$once('authenticationAborted', () => {
        this.$eventBus.$off('authenticated')

        resolve(false)
      })
    })
  }

  public setNavigationComponent (navigation: NavigationContainerRef): void {
    this.navigation = navigation
  }
}
