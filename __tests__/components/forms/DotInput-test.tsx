import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const DotInput = getTestComponent('components/forms/DotInput.vue')

describe('Render dot input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DotInput />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
