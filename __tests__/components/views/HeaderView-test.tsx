import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const HeaderView = getTestComponent('components/views/HeaderView.vue')

describe('Render header view component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeaderView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
