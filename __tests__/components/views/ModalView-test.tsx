import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ModalView = getTestComponent('components/views/ModalView.vue')

describe('Render modal view component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ModalView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
