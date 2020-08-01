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
    };
}

    render() {
        const { classes } = this.props;
   
        return (<div>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Handwriting</InputLabel>
        <Select
          native
          label="Handwriting"
          inputProps={{
            name: 'handwriting',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>handwriting1</option>
          <option value={20}>handwriting2</option>
          <option value={30}>handwriting3</option>
        </Select>
      </FormControl>
      <Button variant="contained" className={classes.add} color="primary">+</Button>
      <Button className={classes.proceed} variant="contained" color="secondary">
               Convert
     </Button>
        
        </div>);
    }
}




export default withStyles(styles)(Convert);