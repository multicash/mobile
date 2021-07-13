import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Icon = getTestComponent('components/icons/Icon.vue')

describe('Render icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Icon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
