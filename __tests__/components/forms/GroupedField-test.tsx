import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const GroupedField = getTestComponent('components/forms/GroupedField.vue')

describe('Render grouped field', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GroupedField />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
