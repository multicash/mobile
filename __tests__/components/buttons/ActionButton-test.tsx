import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ActionButton = getTestComponent('components/buttons/ActionButton.vue')

describe('Render action button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ActionButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
