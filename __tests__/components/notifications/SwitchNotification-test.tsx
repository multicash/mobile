import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const SwitchNotification = getTestComponent('components/notifications/SwitchNotification.vue')

describe('Render switch notification', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SwitchNotification />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
