// @flow

import { connect } from 'react-redux'
import React from 'react'

import Header from './Header'
import ShowCard from './ShowCard'

const Search = (props: { searchTerm: string, shows: Array<Show> }) => (
  <div className="search">
    <Header searchTerm={props.searchTerm} showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
)

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(Search)
