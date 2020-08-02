import React from 'react';
import Textarea from 'react-expanding-textarea';
import { withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles= theme => ({
 Display:{
      
      margin: '8px'
 },
Label:{
   'display': 'block',
   'margin': '10px',
   'font-family':'Impact, Charcoal, sans-serif',
   'font-weight': 'bold',
   'font-size':"20px"
},
textArea:{
    'display': 'block',
    'width':'450px',
    'top':'20px',
    'min-heigth':'500px',
    'resize':'none',
    'overflow':'auto',
    'font-size':"20px"
},
proceed:{
    'align':'center',
    'margin':'7px',
    
    
 }
});


class Display extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        text: this.props.text
    };
} 
add_hand = e => {
    e.preventDefault();
    this.props.nextStep(this.state.text);
  };
 
  handleChange = (e)=>{
    this.setState({
      text:e.target.value
    })
}


    render() {
        const { classes } = this.props;
        const { values} = this.props;
        return  ( <div className={classes.Display}>
                 <label className={classes.Label} for="text">
                  Edit the text 
                  </label>
                  <Textarea 
                   className={classes.textArea}
                   defaultValue={this.state.text}
                   id= "text"
                   maxLength="3000"
                   name="pet[notes]"
                   onChange={this.handleChange}
                   placeholder="Add an image in the left or text here ..."
                   value={this.state.text}
                   />
                  <Button
                  className={classes.proceed}
                  variant="contained"
                  onClick={this.add_hand}
                  disabled={this.state.text.length<1}
                  color="primary">
                  Select handwriting
                  </Button>
                  </div>);
    }
}



export default withStyles(styles)(Display);