import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const RoundedTextInput = getTestComponent('components/forms/RoundedTextInput.vue')

describe('Render rounded text input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RoundedTextInput />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
