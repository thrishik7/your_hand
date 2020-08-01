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
    };
} 
add_hand = e => {
    e.preventDefault();
    this.props.nextStep();
  };


    render() {
        const { classes } = this.props;
        const { values, handleChange } = this.props;
        const text= "If you pass a rows prop, then this sdjowe kesdnxoed eowisnolwen ewiodknxlwe edikolen  kejdnlwe ewkdjnwk wekjndjk ewmnfnocinklq jkfrjbkj enjkdcjk,sf lqnklwrn rflfn ckjowql lskdnl rownflw lkdknflw ntlnlrnscaln component will perform a calculation based on computed lineHeight, borderTopWidth, borderBottomWidth, paddingTop and paddingBottom to deduce what the minimum height-in-rows the component should be.";
        return  ( <div className={classes.Display}>
                 <label className={classes.Label} for="text">
                  Edit the text 
                  </label>
                  <Textarea 
                   className={classes.textArea}
                   defaultValue={text}
                   id= "text"
                   maxLength="3000"
                   name="pet[notes]"
                   placeholder="add the image to convert it to text..."
                   />
                  <Button
                  className={classes.proceed}
                  variant="contained"
                  onClick={this.add_hand}
                  color="primary">
                  Select handwriting
                  </Button>
                  </div>);
    }
}



export default withStyles(styles)(Display);