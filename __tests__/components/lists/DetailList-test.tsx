import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const DetailList = getTestComponent('components/lists/DetailList.vue')

describe('Render detail list', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DetailList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
