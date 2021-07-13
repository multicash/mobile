import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const SourceIcon = getTestComponent('components/icons/SourceIcon.vue')

describe('Render source icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SourceIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
