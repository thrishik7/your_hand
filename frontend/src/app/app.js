import React from 'react';
import NavBar from '../components/navbar/NavBar';
import AddPic from '../components/Addpic/AddPic'

class YourHands extends React.Component{

    render(){

        return(           
           <div className="App">
              <NavBar />
              <AddPic />
            </div>
         )
    }

}

export default YourHands;