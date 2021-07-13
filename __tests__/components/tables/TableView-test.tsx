import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const TableView = getTestComponent('components/tables/TableView.vue')

describe('Render table view', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TableView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
