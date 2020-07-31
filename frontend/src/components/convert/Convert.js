import React from 'react';
import Button from '@material-ui/core/Button';

class Convert extends React.Component {
constructor(props) {
    super(props);
 this.state = {
    };
}

    render() {
        return (<div>
         <Button variant="contained" color="primary">
          handwritting 1
          </Button>
          <Button variant="contained" color="primary">
          handwritting 2
          </Button>
          <Button variant="contained" color="secondary">
            add +
         </Button>
        </div>);
    }
}




export default Convert;