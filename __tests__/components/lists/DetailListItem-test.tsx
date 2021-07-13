import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const DetailListItem = getTestComponent('components/lists/DetailListItem.vue')

describe('Render detail list item', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailListItem />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
