import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const TotalAmountSection = getTestComponent('components/views/TotalAmountSection.vue')

describe('Render total amount section component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TotalAmountSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
