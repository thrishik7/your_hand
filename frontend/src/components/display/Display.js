import React from 'react';
import Textarea from 'react-expanding-textarea';


class Display extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        const text= "If you pass a rows prop, then this component will perform a calculation based on computed lineHeight, borderTopWidth, borderBottomWidth, paddingTop and paddingBottom to deduce what the minimum height-in-rows the component should be.";
        return  ( <div>
                 <label for="text">
                  Edit the text 
                  </label>
                  <Textarea 
                   className="textarea"
                   defaultValue={text}
                   id= "text"
                   maxLength="3000"
                   name="pet[notes]"
                   placeholder="add the image to convert it to text..."
                   />
                  </div>);
    }
}



export default Display;