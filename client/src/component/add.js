import React, { Component } from "react";
import Axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {
        nom: "",
        telephone: "",
        mail: ""
      }
    };
    
  }

  clickHandleAdd = () => {
    console.log(this.state.contact)
    Axios.post("http://localhost:8080/contacts",this.state.contact)
      .then(response => {
        console.log("ajoute sucess");
        this.setState({
          contact: {
            nom: "",
            telephone: "",
            mail: ""
          }
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    
    return (
      <div className="add">
        <h3>Add Contact Page</h3>
        <p>Contact Name</p>
        <input
          value={this.state.contact.nom}
          onChange={(e) => {this.setState({contact:{...this.state.contact, nom: e.target.value}})}}
        />
        <p>Contact Telephone</p>
        <input
          value={this.state.contact.telephone}
          onChange={(e) => {this.setState({contact:{...this.state.contact, telephone: e.target.value}})}}
        />
        <p>Contact Email</p>
        <input
          value={this.state.contact.mail}
          onChange={(e) => {this.setState({contact:{...this.state.contact, mail: e.target.value}})}}
        />
        <br />
        <button onClick={this.clickHandleAdd}>add Contact</button>
      </div>
    );
  }
}

export default Add;