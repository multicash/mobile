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

import Wallet from '@/core/wallet/Wallet'
import { WalletConfigItem } from '@/core/wallet/ManagerConfig'

const sjcl = require('@/core/support/sjcl')

export class DecryptError extends Error {}

export default class ExportImportManager {
  public async readWallet (content: string, encryptionPassword: () => Promise<string>): Promise<WalletConfigItem> {
    const parsed = JSON.parse(content)

    if (this.isWalletConfig(parsed)) {
      return parsed
    }

    if (!this.isEncryptedWalletConfig(parsed)) {
      throw new SyntaxError()
    }

    try {
      return JSON.parse(sjcl.decrypt(await encryptionPassword(), content))
    } catch (e) {
      throw new DecryptError('Content couldn\'t be decrypted.')
    }
  }

  public static getExportContent (wallet: Wallet, encryptionPassword: string|null = null): string {
    let walletConfig = JSON.stringify(wallet.getExportConfig())

    if (encryptionPassword) {
      walletConfig = sjcl.encrypt(encryptionPassword, walletConfig, {
        iter: 10000
      })
    }

    return walletConfig
  }

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

  protected isEncryptedWalletConfig (content: any): boolean {
    return 'iv' in content &&
      'v' in content &&
      'iter' in content &&
      'ks' in content &&
      'ts' in content &&
      'mode' in content &&
      'adata' in content &&
      'cipher' in content &&
      'salt' in content &&
      'ct' in content
  }
}
