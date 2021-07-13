import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const PinKeyboard = getTestComponent('components/keyboards/PinKeyboard.vue')

describe('Render pin keyboard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PinKeyboard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
