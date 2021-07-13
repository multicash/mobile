import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const InputDescription = getTestComponent('components/labels/InputDescription.vue')

describe('Render input description', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<InputDescription />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
