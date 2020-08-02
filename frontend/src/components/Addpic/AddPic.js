import React from 'react';
import UploadPic from '../Uploadpic/UploadPic';
import Convert from '../convert/Convert';
import Display from '../display/Display';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


class AddPic extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            step: 1,
            selectedFile: null,
            fileStatus:0,
            text:""
        };
    }

      fileupload=()=>{
          this.setState({
            fileStatus:1
          });
      }
      // Proceed to next step
      nextStep =(txt) =>{
          const {step} = this.state;
          this.setState({
             step:step+1,
             text:txt
          });
      }
      
      prevStep =(txt) =>{
        const {step} = this.state;
        this.setState({
           step:step-1,
           text:txt
        });}
      getText=(txt)=>{
          this.setState({
              text:txt
          })
      };
    
     // Handle field change 
     handleChange = input =>e=>{
         this.setState({[input]: e.target.value});
     }
    
     render() {
            
        const {step}= this.state;
        const {selectedFile, fileStatus} = this.state;
        switch(step){
         case 1: return (
                       <Grid container>
                        <Grid item sm>
                       <UploadPic
                          nextStep={this.nextStep}
                          handleChange={this.handleChange}
                          selectedfile={selectedFile}
                          getText={this.getText}
                         />
                         </Grid>
                         <Grid item sm>
                         <Display
                         nextStep={this.nextStep}
                         fileStatus={fileStatus}
                         handleChange={this.handleChange}
                         selectedfile={selectedFile}
                         text={this.state.text}
                         />
                         </Grid>
                        </Grid>
                         );
  
         case 2: return (
            <Grid container>
            <Grid item sm>
           <UploadPic
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              selectedfile={selectedFile}
              getText={this.getText}
            />
             </Grid>
             <Grid item sm>
             <Convert
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             selectedfile={selectedFile}
             text={this.state.text}
             />
             </Grid>
            </Grid>
         );}
        }
}






export default AddPic;