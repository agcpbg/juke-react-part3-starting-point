import React, { Component } from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: '',
      filteredArtists: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.setState({
      filteredArtists: props.artists
    })
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({ inputValue: value} );
  }

  render () {
    return (

      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>

    )
  }
}
