import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import '../App.css';
import {withTheme} from '@material-ui/core/styles'
// import querystring from 'querystring'
// import http from 'http'
// import fs from 'fs'
// import request from 'request'

const API_KEY = "2026053";

class InputText extends Component{

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            input: undefined
        };
      }

    handleChange = event => {
        this.setState({
            input: event.target.value
        })
    };

    handleSubmit = () => {
        console.log(`Submitted text:\n${this.state.input}`)
        // this.getSummary();
    }

    // getSummary = () => {

    //     var reqOptions = {
    //         url: "http://api.smmry.com/&SM_API_KEY="+API_KEY,
    //         headers: {
    //             "Expect:":""
    //         }
    //     }

    //     callback = (error, response, body) => {
    //             console.log('error:', error);
    //             console.log('statusCode:', response && response.statusCode);
    //             console.log('body:', body);
    //     }

    //     request.post(reqOptions, callback)
    // }
    checkLanguage = () => {
        var language = window.navigator.userLanguage || window.navigator.language;
        console.log(language)
        if (language != "en-US"){
            alert('Only English is supported for now');
        }
        
    }

    render() {
        return (
          <div className="Input-container">
            <Input 
              multiline={true} 
              onChange={event => this.handleChange(event)}
              rows={10}
              fullWidth={true}
              color="primary"
              style={{marginBottom: "40px"}}
              onFocus={this.checkLanguage}/>
            <p>Number of characters: {this.state.input === undefined ? 0 : this.state.input.length}</p>
            <Button 
                disabled={this.state.input === undefined || this.state.input.length === 0}
                variant="raised" 
                color="primary"
                onClick={this.handleSubmit}>
                Submit
            </Button>
          </div>
        );
      }

}

export default withTheme()(InputText);