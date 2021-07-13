import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Card = getTestComponent('components/views/Card.vue')

describe('Render card component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with background color', () => {
    const tree = renderer.create(<Card backgroundColor="blue" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
