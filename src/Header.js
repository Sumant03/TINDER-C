import React from "react";
import "./Header.css";
// import PersonIcon from "@material-ui/icons/Person";
import image1 from './person.jpeg';
import image2 from './tinder.jpeg';
import image3 from './forumicon.jpeg';
// import IconButton from "@material-ui/core/IconButton";
function Header(){
    return(
        <div className='header'>
       
      
      <img className="header1" height="40px" src={image1}/>
      
      <img  className="header2" src={image2}/>
      <img  className="header3" height="40px" src={image3}/>
        </div>
         );
    
}

export default Header
