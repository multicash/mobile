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
