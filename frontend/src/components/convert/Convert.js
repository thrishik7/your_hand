import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles= theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 320,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    add:{
        'align':'center',
        'margin':'7px',
        'height':'53px'
    },
    proceed:{
        'align':'center',
        'margin':'10px',
        'height':'53px'
     }
  });

class Convert extends React.Component {
constructor(props) {
    super(props);
    this.state = { 
        selectedHw:""
    };
 }

    back_edit = e => {
    e.preventDefault();
    this.props.prevStep(this.props.text);
    };
    
    handleChange =(e)=>{
        this.setState({
            selectedHw:e.target.vaue
        })
        console.log(this.props.text)
    }
    render() {
        const { classes } = this.props;
        const { values} = this.props;
        const handwritings= ['handwriting1','handwriting2','handwriting3'];
        var hw= handwritings.reduce(function(memo,hw1, index) {
            <option value={index+1}>{hw1}</option>
          }, {});
        return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
       <InputLabel htmlFor="outlined-age-native-simple">Handwriting</InputLabel>
          
          <Select
          native
          label="Handwriting"
          onChange={this.handleChange}
          inputProps={{
            name: 'handwriting',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>hw1</option>
          <option value={20}>hw2</option>
          <option value={30}>hw3</option>
        </Select>
      </FormControl>
      <Button variant="contained" className={classes.add} color="primary">+</Button>
      <Button 
       className={classes.proceed}
       variant="contained"
       disabled={this.state.selectedHw==""}
       color="secondary">
               Convert
     </Button>
      <Button
                  className={classes.proceed}
                  variant="contained"
                  onClick={this.back_edit}
                  color="primary">
                  back
      </Button>
        </div>);
    }
}




export default withStyles(styles)(Convert);