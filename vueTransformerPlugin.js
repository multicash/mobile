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

const vueNativeScripts = require('vue-native-scripts')
const upstreamTransformer = require('metro-react-native-babel-transformer')

const vueExtensions = ['vue'] // <-- Add other extensions if needed.

module.exports.transform = function ({ src, filename, options }) {
  if (vueExtensions.some(ext => filename.endsWith('.' + ext))) {
    return vueNativeScripts.transform({ src, filename, options })
  }
  return upstreamTransformer.transform({ src, filename, options })
}
