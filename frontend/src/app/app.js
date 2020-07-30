import React from 'react';
import NavBar from '../components/navbar/NavBar';
import uiTheme from './ui-theme';
import righCconsole from '../components/scan-words/scanwords';
import leftConsole from '../components/left-Console/leftConsole';

class YourHands extends React.Component{
    constructor(props){
        super(props);
        this.child= React.createRef();
        this.state={};

    }
    render(){
        

        return(
            <NavBar 
            text="Yourhands"
            fontSize='1.5em'
            color='primary'
            >
            </NavBar>
            
            
        )
    }

}

export default YourHands;