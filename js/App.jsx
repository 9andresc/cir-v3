import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Landing from './Landing'
import NotFound from './NotFound'
import Search from './Search'

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
