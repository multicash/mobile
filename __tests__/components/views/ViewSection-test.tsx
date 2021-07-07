import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ViewSection = getTestComponent('components/views/ViewSection.vue')

describe('Render view section component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ViewSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
