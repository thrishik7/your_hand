import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';



class UploadPic extends React.Component {
 
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
    const { values } = this.props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Your hands"/>
            </React.Fragment>
        </MuiThemeProvider>
    );
    }
}

export default UploadPic;