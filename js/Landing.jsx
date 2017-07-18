// @flow

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'

import type { RouterHistory } from 'react-router-dom'

import { setSearchTerm } from './actions-creators'

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  }

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault()
    this.props.history.push('/search')
  }

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.props.handleSearchTermChange}
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm })
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
