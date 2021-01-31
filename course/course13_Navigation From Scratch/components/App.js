import React, { useState } from 'react'
import Translate from './Translate'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Header from './Header'

import Route from './Route'

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Shade of Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate">
        <Translate items={items} />
      </Route>
    </div>
  )
}
