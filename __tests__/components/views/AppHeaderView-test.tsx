import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const AppHeaderView = getTestComponent('components/views/AppHeaderView.vue')

describe('Render app header view component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppHeaderView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
