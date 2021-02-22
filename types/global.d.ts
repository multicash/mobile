import { configLoggerType } from 'react-native-logs'

declare class logs {
  private _levels;
  private _level;
  private _transport;
  private _transportOptions;
  private _asyncFunc;
  private _async;
  private _dateFormat;
  private _printLevel;
  private _printDate;
  private _enabled;
  private _enabledExtensions;
  private _extensions;
  private _extendedLogs;
  constructor(config?: configLoggerType);
  /** Log messages methods and level filter */
  private _log;
  private _sendToTransport;
  private _formatMsg;
  /** Return true if level is enabled */
  private _isLevelEnabled;
  /** Return true if extension is enabled */
  private _isExtensionEnabled;
  /** Enable an extension */
  enable: (extension: string) => boolean;
  /** Disable an extension */
  disable: (extension: string) => boolean;
  /** Return all created extensions */
  getExtensions: () => string[];
  /** Set log severity API */
  setSeverity: (level: string) => string;
  /** Get current log severity API */
  getSeverity: () => string;
}
/** Extend logs Class with generic types to avoid typescript errors on dynamic log methods */
declare class logTyped extends logs {
  [key: string]: any;
}

declare global {
  let Logger: logTyped
  let msCrypto: any
}
