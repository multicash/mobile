import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const ModalNavigation = getTestComponent('components/navigations/ModalNavigation.vue')

describe('Render modal navigation', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ModalNavigation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
