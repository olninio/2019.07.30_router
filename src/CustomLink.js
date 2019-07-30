import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const styles = {
  link: {
    textDecoration: 'none',
    margin: '5px',
    padding: '10px',
  }
}

const CustomLink = (props) => (
  <Link 
    to={props.to} 
    style= {styles.link}
  >
    <Button 
      variant = {"contained"} 
      color = {"primary"}
      size = {'small'}
      >{props.children}
     
    </Button>
      
  </Link>
)

export default CustomLink