import React from 'react'
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        online: this.props.online,
      };
    }
    render() {

    return (
  <div className="Contact">

      <div >
          <img className="avatar"src={this.props.avatar}></img>
      </div>

      <div className="name">
            {this.props.name}

      </div>

      <div className="status" onClick={(event)=> {
          const newFavorite = !this.state.online;
          console.log(newFavorite);
                this.setState({ online: newFavorite });
              }} >
          <div className =  {this.state.online ? "status-online" : "status-offline" } ></div>
         
         
         
          <div className="status-text"> {this.state.online ? "online" : "offline"}

          </div>

      </div>
  </div>
  )}
    }

export default Contact;
        


   

