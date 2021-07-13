import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ActionNotification = getTestComponent('components/notifications/ActionNotification.vue')

describe('Render action notification', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ActionNotification />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
