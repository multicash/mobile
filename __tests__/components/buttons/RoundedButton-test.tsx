import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const RoundedButton = getTestComponent('components/buttons/RoundedButton.vue')

describe('Render rounded button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RoundedButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
