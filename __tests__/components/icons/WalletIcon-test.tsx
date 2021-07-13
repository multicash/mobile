import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const WalletIcon = getTestComponent('components/icons/WalletIcon.vue')

describe('Render wallet icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WalletIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
