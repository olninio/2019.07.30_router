import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const CustomLink = () => (
  <Link to={'/home'} style= {{textDecoration: 'none'}}>
    <Button variant={"contained"} color={"primary"}>Home</Button>
  </Link>
)

export default CustomLink