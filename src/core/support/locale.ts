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

import { Platform, NativeModules } from 'react-native'

export default class Locale {
  public static getCurrentLocale (): string {
    try {
      return Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier.substring(0, 2)
    } catch (e) {
      return 'en_EN'
    }
  }
}
