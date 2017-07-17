import React from 'react'
import { render } from 'react-dom'

const MyTitle = props => {
  const style = { color: props.color }

  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  )
}

const MyFirstComponent = () => (
  <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Breaking Bad" color="GreenYellow" />
    <MyTitle title="Orange is the New Black" color="peru" />
    <MyTitle title="Rick and Morty" color="burlywood" />
  </div>
)

render(<MyFirstComponent />, document.getElementById('app'))
