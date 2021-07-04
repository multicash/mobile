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

import { Store } from 'vuex'

// Update version behind section to show announcements again.
const announcementVersions: AnnouncementVersions = {
  home: 1,
  topUp: 1
}

interface AnnouncementVersions {
  [index: string]: number
}

interface Announcement {
  version: number,
  section: string
}

const state: Announcement[] = []

const mutations = {
  ANNOUNCEMENT_SEEN (state: Announcement[], section: string): void {
    const announcement = {
      version: announcementVersions[section],
      section
    }

    const newState = state.filter(announcement => announcement.section !== section)

    const length = state.length
    for (let i = 0; i < length; i++) {
      state.shift()
    }

    newState.forEach(announcement => state.push(announcement))

    state.push(announcement)
  },

  SHOW_ALL_ANNOUNCEMENTS (state: Announcement[]): void {
    const length = state.length
    for (let i = 0; i < length; i++) {
      state.shift()
    }
  }
}

const actions = {
  announcementSeen (context: Store<Announcement[]>, section: string): void {
    context.commit('ANNOUNCEMENT_SEEN', section)
  },

  hasAnnouncement (context: Store<Announcement[]>, section: string): boolean {
    for (const announcement of context.state) {
      if (announcement.section === section && announcement.version >= announcementVersions[section]) {
        return false
      }
    }

    return true
  },

  showAllAnnouncements (context: Store<Announcement[]>): void {
    context.commit('SHOW_ALL_ANNOUNCEMENTS')
  }
}

const getters = {
  announcements (state: Announcement[]): Announcement[] {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
