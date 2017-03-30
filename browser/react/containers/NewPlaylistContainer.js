import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            buttonState: true,
            formDirty: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
      const value = event.target.value;
      this.validate(value)
      this.setState({ inputValue: value, formDirty: true });
    }

    handleSubmit (event){
        event.preventDefault();
        this.props.addPlaylist(this.state.inputValue);
        this.setState({ inputValue:''} );
    }

    validate(text){
        let value;
        if(text.length === 0 || text.length> 16 ) value = true
        else {value = false}
        this.setState({ buttonState:value })
    }

    render(){
        return (
            <div>
                <NewPlaylist
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    inputValue = {this.state.inputValue}
                    buttonState = {this.state.buttonState}
                    formDirty = {this.state.formDirty}
                />
            </div>
        )
    }

}
