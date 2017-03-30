import React, { Component } from 'react';

import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      inputValue: '',
    };

    this.filterFunction = this.filterFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  filterFunction(){
      return this.props.artists.filter((artist)=>{
            return artist.name.match(this.state.inputValue)
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
        <Artists artists={this.filterFunction()} />  {/* this will run on every render, component will render on every stateupdate */}
      </div>

    )
  }
}
