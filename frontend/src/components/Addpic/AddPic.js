import React from 'react';
import UploadPic from '../Uploadpic/UploadPic';
import Convert from '../convert/Convert';
import Display from '../display/Display';
import axios from 'axios';


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
         case 3: return (<UploadPic
                          nextStep={this.nextStep}
                          handleChange={this.handleChange}
                          selectedfile={selectedFile}
                         />);
         case 2: return (<Display
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        selectedfile={selectedFile}
           />);   
         case 1: return (<Convert
                         nextStep={this.nextStep}
                         handleChange={this.handleChange}
                         selectedfile={selectedFile}
           />);
        }
        }
}






export default AddPic;