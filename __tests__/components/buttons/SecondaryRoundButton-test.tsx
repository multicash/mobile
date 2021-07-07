import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const SecondaryRoundButton = getTestComponent('components/buttons/SecondaryRoundButton.vue')

describe('Render secondary round button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SecondaryRoundButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
