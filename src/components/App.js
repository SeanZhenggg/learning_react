import React from 'react'
import Accordion from './Accordion'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'What use React?',
    content: 'React favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]
export default () => {
  return (
    <div>
      <Accordion />
    </div>
  )
}
