import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Feature = getTestComponent('components/lists/Feature.vue')

describe('Render feature', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Feature />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
