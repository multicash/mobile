import React from 'react'
import renderer from 'react-test-renderer'
import { getTestComponent } from '@/utils/TestUtils'

const Card = getTestComponent('components/views/Card.vue')

describe('Render card component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('Render card component with background color', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Card backgroundColor="blue" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
