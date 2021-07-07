import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const RestoreKeyGridView = getTestComponent('components/views/RestoreKeyGridView.vue')

describe('Render restore key grid view component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RestoreKeyGridView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
