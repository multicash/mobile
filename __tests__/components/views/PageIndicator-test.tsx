import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const PageIndicator = getTestComponent('components/views/PageIndicator.vue')

describe('Render page indicator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PageIndicator />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
