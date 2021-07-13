import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Money = getTestComponent('components/labels/Money.vue')

describe('Render money', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Money />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
