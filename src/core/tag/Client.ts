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

import ClientInterface from '@/core/tag/ClientInterface'
import RegisteredTag from '@/core/tag/models/RegisteredTag'
import GetTag from '@/core/tag/models/GetTag'
import TagExists from '@/core/tag/models/TagExists'

const Log = Logger.extend('TAG')

export default class Client implements ClientInterface {
  protected tagsApi: string

  constructor (tagsApi: string) {
    this.tagsApi = tagsApi
  }

  public address (tag: string, network: string = 'mainnet'): Promise<string> {
    return fetch(`${this.tagsApi}/${network}/tags/${tag}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((json: GetTag) => {
        Log.info(`Received an address (${json.address}) for the tag: ${tag}`)

        return json.address
      })
      .catch(error => {
        Log.error(error)
        Log.error(`Failed to get request MCX tag: ${tag}`)

        return error
      })
  }

  public exists (tag: string, network: string = 'mainnet'): Promise<boolean> {
    return fetch(`${this.tagsApi}/${network}/tags/exists`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tag })
    })
      .then(response => response.json())
      .then((json: TagExists) => {
        Log.info(`MCX tag (${tag}) exists: ${json.exists}`)

        return json.exists
      })
      .catch(error => {
        Log.error(error)
        Log.error(`Failed to get the MCX tag status: ${tag}`)

        return error
      })
  }

  public register (tag: string, xpubKey: string, network: string = 'mainnet'): Promise<RegisteredTag> {
    return fetch(`${this.tagsApi}/${network}/tags`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tag: tag,
        xpub_key: xpubKey
      })
    })
      .then(response => response.json())
      .then((json: RegisteredTag) => {
        Log.info(`Registered a new MCX tag: ${tag}, with public key: ${xpubKey}`)

        return json
      })
      .catch(error => {
        Log.error(error)
        Log.error(`Failed to register a new MCX tag: ${tag}, with public key: ${xpubKey}`)

        return error
      })
  }
}
