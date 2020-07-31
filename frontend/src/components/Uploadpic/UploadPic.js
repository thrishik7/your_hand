import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/styles';
import theme from '../../app/ui-theme';

const styles = theme => ({

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
});


class UploadPic extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
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
      <Dropzone accept="image/png" onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className={classes.container} >
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag and drop images here, or click to select image (.png) +</p>
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
}



export default withStyles(styles)(UploadPic);