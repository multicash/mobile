import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const SecondaryActionButton = getTestComponent('components/buttons/SecondaryActionButton.vue')

describe('Render secondary action button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SecondaryActionButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
