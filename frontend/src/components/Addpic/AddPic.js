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
            selectedFile: null
        };
    }
      // Proceed to next step
      nextStep =() =>{
          const {step} = this.state;
          this.setState({
             step:step+1
          });
      }
      //Go back 
      prevStep =() =>{
        const {step} = this.state;
        this.setState({
           step:step-1
        });
    }
     // Handle field change 
     handleChange = input =>e=>{
         this.setState({[input]: e.target.value});
     }
    
     render() {
            
        const {step}= this.state;
        const {selectedFile} = this.state;
        switch(step){
         case 1: return (
                       <Grid container>
                        <Grid item sm>
                       <UploadPic
                          nextStep={this.nextStep}
                          handleChange={this.handleChange}
                          selectedfile={selectedFile}
                         />
                         </Grid>
                         <Grid item sm>
                         <Display
                         nextStep={this.nextStep}
                         handleChange={this.handleChange}
                         selectedfile={selectedFile}
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
             />
             </Grid>
             <Grid item sm>
             <Convert
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             selectedfile={selectedFile}
             />
             </Grid>
            </Grid>
         );}
        }
}






export default AddPic;