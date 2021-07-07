import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Selector = getTestComponent('components/forms/Selector.vue')

describe('Render selector', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Selector />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
