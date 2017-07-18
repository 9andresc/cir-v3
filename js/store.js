// @flow

import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

export default store
