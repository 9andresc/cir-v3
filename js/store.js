// @flow

import { createStore, compose } from 'redux'

import reducers from './reducers'

const store = createStore(
  reducers,
  compose(
    typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
)

export default store
