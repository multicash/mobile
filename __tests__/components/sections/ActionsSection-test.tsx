import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ActionsSection = getTestComponent('components/sections/ActionsSection.vue')

describe('Render actions section', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ActionsSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
