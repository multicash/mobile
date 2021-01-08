import Wallet from '@/wallet/Wallet'
import { WalletConfigItem } from '@/wallet/ManagerConfig'

const sjcl = require('@/support/sjcl')

export default class ExportImportManager {
  // public static registerEvents (browserWindow: Electron.BrowserWindow) {
  //   electron.ipcMain.on('export-wallet-file', async (event, filename: string) => {
  //     event.returnValue = await electron.dialog.showSaveDialog(browserWindow, {
  //       defaultPath: filename,
  //       properties: [
  //         'showHiddenFiles',
  //         'createDirectory',
  //         'showOverwriteConfirmation'
  //       ]
  //     })
  //   })
  // }

  // public async readWallet (file: File, encryptionPassword: () => Promise<string>): Promise<WalletConfigItem> {
  //   const content = fs.readFileSync(file.path).toString()
  //   let parsed = JSON.parse(content)
  //
  //   if (!this.isWalletConfig(parsed)) {
  //     parsed = sjcl.decrypt(await encryptionPassword(), content)
  //     parsed = JSON.parse(parsed)
  //   }
  //
  //   return parsed
  // }

  public static getExportContent (wallet: Wallet, encryptionPassword: string|null = null): string {
    let walletConfig = JSON.stringify(wallet.getExportConfig())

    if (encryptionPassword) {
      walletConfig = sjcl.encrypt(encryptionPassword, walletConfig, {
        iter: 10000
      })
    }

    return walletConfig
  }

  // protected userSavesFile (filename: string, isEncrypted: boolean = false): Promise<Electron.SaveDialogReturnValue> {
  //   return electron.ipcRenderer.sendSync(
  //     'export-wallet-file',
  //     `${filename.toLocaleLowerCase().replace(' ', '-')}${isEncrypted ? '-encrypted-' : ''}-myvergies-export.json`
  //   )
  // }

  protected isWalletConfig (content: any): content is WalletConfigItem {
    return content &&
      'name' in content &&
      'icon' in content &&
      'tag' in content &&
      'coin' in content &&
      'network' in content &&
      'restoreKey' in content &&
      'walletPrivateKey' in content &&
      'singleAddress' in content &&
      'apiEndpoint' in content
  }
}
