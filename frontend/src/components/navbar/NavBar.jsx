import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar  from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import Button  from '@material-ui/core/Button';
import IconButton  from '@material-ui/core/IconButton';
import MenuIcon  from '@material-ui/icons/Menu';

const NavBar =(props) =>{
  
    return(
        <div>
          <AppBar position="static">
           <Toolbar>
             <Typography variant="h6" className="Your_hands">
               Your Hands
             </Typography>
          </Toolbar>
          </AppBar>
        </div>
    )
}

export default NavBar;