import { Platform, NativeModules } from 'react-native'

export default class Locale {
  public static getCurrentLocale (): string {
    try {
      return Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier.substring(0, 2)
    } catch (e) {
      return 'en'
    }
  }
}
