import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: '',
            buttonState: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
      const value = event.target.value;
      this.validate(value)

      this.setState({ inputValue: value }); //async

    }

    handleSubmit (event){
        event.preventDefault()
        this.setState({ inputValue:''} );
    }

    validate(text){
        let value;
        console.log(text.length)
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
                />
            </div>
        )
    }

}
