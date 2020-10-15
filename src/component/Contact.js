import React from 'react'
import './Contact.css';

function Contact (props) {
    return (
  <div className="Contact">

      <div >
          <img className="avatar"src={props.avatar}></img>
      </div>

      <div className="name">
            {props.name}

      </div>

      <div className="status">
          <div className =  {props.online ? "status-online" : "status-offline" } ></div>
         
         
         
          <div className="status-text"> {props.online ? "Online" : "offline"}

          </div>

      </div>
  </div>
  )}

export default Contact;
        
      
   

