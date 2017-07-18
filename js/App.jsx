// @flow

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import type { Match } from 'react-router-dom'

import preload from '../data.json'

import Details from './Details'
import Landing from './Landing'
import NotFound from './NotFound'
import Search from './Search'
import store from './store'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/search"
            component={props => <Search shows={preload.shows} {...props} />}
          />
          <Route
            path="/details/:id"
            component={(props: { match: Match }) => {
              const selectedShow = preload.shows.find(
                show => show.imdbID === props.match.params.id
              )
              return <Details show={selectedShow} {...props} />
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
)

export default App
