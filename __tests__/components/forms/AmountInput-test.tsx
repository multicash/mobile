import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const AmountInput = getTestComponent('components/forms/AmountInput.vue')

describe('Render amount input', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AmountInput />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
