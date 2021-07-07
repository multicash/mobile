import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const AddressesContainer = getTestComponent('components/views/AddressesContainer.vue')

describe('Render addresses container component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddressesContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
