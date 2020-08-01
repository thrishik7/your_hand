import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/styles';
import theme from '../../app/ui-theme';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    leftconsole:{
        'margin': '10px'
    },
    container:{
    'flex': 1,
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'padding': '20px',
    'border-width': '2px',
    'border-radius': '2px',
    'border-color': '#000000',
    'border-style': 'dashed',
    'background-color': '#fafafa',
    'color': '#000000',
    'outline': 'none',
    'font-family':'Impact, Charcoal, sans-serif',
    'transition': 'border .24s ease-in-out'},
    proceed:{
        'align':'center',
        'margin':'4px'
    }
});


class UploadPic extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
        this.setState({files})
        console.log(this.state.files);
     
    };
    this.state = {
      files: []
    };
   
  }


    render() {
    const files = this.state.files.map(file => (
        <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    const { classes } = this.props;
    return (
     <div className={classes.leftconsole}>
     <Dropzone accept="image/png" onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className={classes.container}>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files (.png)</p>
            </div>
            <aside>
              <h4>File Selected:</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
      <br/>
    <Button 
    className={classes.proceed} 
    variant="contained"
    disabled={this.state.files.length<1}
    color="primary">
               proceed
     </Button></div>
    );
  }
}



export default withStyles(styles)(UploadPic);