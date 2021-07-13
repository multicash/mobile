import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const KeyboardKey = getTestComponent('components/keyboards/KeyboardKey.vue')

describe('Render keyboard key', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<KeyboardKey />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
