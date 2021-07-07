import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ViewBackground = getTestComponent('components/views/ViewBackground.vue')

describe('Render view background component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ViewBackground />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
