import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Contact extends React.Component {

  state = {
    message: ''
  }

  render() {
    return (
      <div>
        <TextField
            label="Message"
            fullWidth = {true}
            value = {this.state.message}
            onChange = {(event) => this.setState({
              message: event.target.value
            })}
        />
        <br/>
        <br/>
        <Button
          variant = {'contained'}
          color = {'secondary'}
          size = {'small'}
          fullWidth = {true}
          onClick = {(event) => alert(this.state.message)} 
          >
          Contact Us
        </Button>
      </div> 
    )
  }
}
export default Contact;
