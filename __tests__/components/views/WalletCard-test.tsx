import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const WalletCard = getTestComponent('components/views/WalletCard.vue')

describe('Render wallet card component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WalletCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
