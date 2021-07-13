import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const WalletsSection = getTestComponent('components/sections/WalletsSection.vue')

describe('Render wallets section', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WalletsSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
