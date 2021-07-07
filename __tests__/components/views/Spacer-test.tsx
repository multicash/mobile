import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Spacer = getTestComponent('components/views/Spacer.vue')

describe('Render spacer component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Spacer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
