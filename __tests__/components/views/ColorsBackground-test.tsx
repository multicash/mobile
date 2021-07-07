import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ColorsBackground = getTestComponent('components/views/ColorsBackground.vue')

describe('Render colors background component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ColorsBackground />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
