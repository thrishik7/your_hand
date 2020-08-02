import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/styles';
import theme from '../../app/ui-theme';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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
    },
    Label:{
      'display': 'block',
      'margin': '10px',
      'font-family':'Impact, Charcoal, sans-serif',
      'font-weight': 'bold',
      'font-size':"20px"
   }, 
});


class UploadPic extends Component {
  constructor(props) {
    super(props);
    this.onDrop = () => {
       this.setState({files: event.target.files[0]});
      };
    this.state = {
      files: null
    };
    }
    
    onFileUpload =() => {
      
       const formData = new FormData();
       console.log(this.state.files);
       formData.append(
         "image",
         this.state.files,
         this.state.files.name
        );
       
       axios.post("http://localhost:5000/upload-image", formData).then(resp =>{
          this.props.getText(resp.data["text"]);
       }); 
      }

    render() {
    let filet="";
    if(this.state.files!=null)
      filet = this.state.files.name;
  
    const { classes } = this.props;
    return (
     <div className={classes.leftconsole}>
     <label className={classes.Label}>
                  Select an image
                  </label>
     <Dropzone accept="image/png" onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className={classes.container}>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files (.png)</p>
            </div>
            <aside>
              <h4>File Selected:</h4>
              {filet}
            </aside>
          </section>
        )}
      </Dropzone>
      <br/>
    <Button 
    className={classes.proceed} 
    variant="contained"
    onClick= {this.onFileUpload}
    disabled={filet==""}
    color="primary">
               proceed
     </Button></div>
    );
  }
}



export default withStyles(styles)(UploadPic);