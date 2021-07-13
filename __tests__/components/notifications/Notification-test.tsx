import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Notification = getTestComponent('components/notifications/Notification.vue')

describe('Render notification', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Notification />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
