import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const DetailListTitle = getTestComponent('components/lists/DetailListTitle.vue')

describe('Render detail list title', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailListTitle />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
