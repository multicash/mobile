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

import { logger, consoleTransport, configLoggerType } from 'react-native-logs'

const defaultConfig: configLoggerType = {
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    color: 'ansi'
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: false,
  enabled: true,
  enabledExtensions: ['APP', 'AUTH', 'WALLET', 'WM', 'IMPORT', 'EXPORT']
}

const loggerInstance = logger.createLogger(defaultConfig)

// @ts-ignore
Logger = loggerInstance

export default loggerInstance
