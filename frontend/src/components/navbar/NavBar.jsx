import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import { makeStyles } from '@material-ui/core/styles';

const NavBar =(props) =>{
    const toolbar={
        AppBar:{
            backgroundColor: props.backgroundColor,

        },
        Typography:{
            fontSize:props.fontSize,
            flexGrow: 1
        },
        centeringSpace:{
            flexGrow: 1.21,
        }
    };

    return(
        <div>
            <AppBar position="static" style={toolbar.AppBar} color={props.color}>
                <Toolbar>
                <Typography style={toolbar.Typography} color={props.fontColor}>
                        {props.text}
                </Typography> 
                {props.onClick &&(
                <Fab     color="primary"
                         onClick={props.onClick}
                         aria-label="add"
                         className={classes.fab}>
                        <AspectRatioIcon />
                </Fab>)}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;