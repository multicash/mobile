import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const LinkButton = getTestComponent('components/buttons/LinkButton.vue')

describe('Render link button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LinkButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
