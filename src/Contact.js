import React from 'react';

import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const Contact = (props) => (
  <div>
    <TextField
        label="Message"
        fullWidth = {true}
    />
    <br/>
    <br/>
    <Button
      variant = {'contained'}
      color = {'secondary'}
      size = {'small'}
      fullWidth = {true}
      >
      Contact Us
    </Button>
  </div>
  
)

export default Contact;
