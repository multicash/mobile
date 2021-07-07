import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const KeyboardAvoidingView = getTestComponent('components/views/KeyboardAvoidingView.vue')

describe('Render keyboard avoiding view component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<KeyboardAvoidingView />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
