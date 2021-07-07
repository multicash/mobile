import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ColorPicker = getTestComponent('components/forms/ColorPicker.vue')

describe('Render color picker', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ColorPicker />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
