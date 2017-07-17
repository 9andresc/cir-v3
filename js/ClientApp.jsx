import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement

const MyTitle = props =>
  ce('div', null, ce('h1', { style: { color: props.color } }, props.title))

const MyFirstComponent = () =>
  ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Breaking Bad', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Orange is the New Black', color: 'LimeGreen' })
  )

render(ce(MyFirstComponent), document.getElementById('app'))
