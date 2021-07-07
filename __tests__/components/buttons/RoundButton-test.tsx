import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const RoundButton = getTestComponent('components/buttons/RoundButton.vue')

describe('Render round button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RoundButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
