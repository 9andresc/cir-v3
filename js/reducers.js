// @flow

import { combineReducers } from 'redux'

import { ADD_API_DATA, SET_SEARCH_TERM } from './actions'

const apiData = (state = {}, action: Action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload })
  }

  return state
}

const searchTerm = (state = '', action: Action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload
  }

  return state
}

const rootReducer = combineReducers({ apiData, searchTerm })

export default rootReducer
