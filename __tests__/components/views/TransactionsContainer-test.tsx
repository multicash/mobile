import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const TransactionsContainer = getTestComponent('components/views/TransactionsContainer.vue')

describe('Render transactions container component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TransactionsContainer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
