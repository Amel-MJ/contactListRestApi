import React, { Component } from "react";
import Axios from "axios";
import Add from "./add";
import Modif from "./update";
import Delete from "./delete";

class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [],
      visible: false,
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:8080/contacts")
      .then(response => {
        console.log(response.data);
        this.setState({
          contact: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  HandledViss = () => {
    this.setState({
      visible: !this.state.visible
    });
  };
 
  render() {
    const visible = this.state.visible;
    const visibleContact = this.state.visibleContact;
    const contactItems = this.state.contact.map((el,id) => (
     
       <div key={el.id} className="contactMap">
        <p>nom:{el.nom}</p>
        <p>tel:{el.telephone}</p>
        <p>mail:{el.mail}</p>
        <div className="contactModDel">
        <Modif id={el.id}/>
        <Delete id={el.id}/>
        </div>
       
      </div>
     
    ));
    return (
      <div>
        <button onClick={this.HandledViss}>Contact List</button>
        <button onClick={this.HandledViss}>on/off</button>
        <b className="contactList">{visible ? <Add /> : contactItems}</b>
        
      </div>
    );
  }
}

export default contact;
