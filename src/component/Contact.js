import React from 'react'
import './Contact.css';





function Contact () {
  const avatar = "https://i.pinimg.com/originals/d3/4e/ca/d34eca644b13450535332d70595f77ee.png"
  const name = "Youssouf"
  const online = true
  return (
  <div className="Contact">

      <div >
          <img className="avatar"src={avatar}></img>
      </div>

      <div className="name">
            {name}

      </div>

      <div className="status">
          <div className =  {online ? "status-online" : "status-offline" } ></div>
          <div className="status-text">
              {online ? "Online" : "offline"}

          </div>

      </div>
  </div>
  )}

export default Contact;
        
      
   

