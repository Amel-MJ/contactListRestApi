import React, { Component } from "react";
import Axios from "axios";

class Modif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
      console.log( this.props.match.params.id)
    Axios.get("http://localhost:8080/contacts/" + this.props.match.params.id)
      .then(response => {
        console.log('response.data', response.data)
        this.setState({
         // nom: res.data.nom,
          //telephone: res.data.telephone,
         // mail: res.data.mail
   
         contact: {...response.data}
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onChangeStudentName(e) {
    this.setState({ nom: e.target.value });
  }

  onChangeStudentTelephone(e) {
    this.setState({ telephone: e.target.value });
  }

  onChangeStudentMail(e) {
    this.setState({ mail: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      nom: this.state.contact.nom,
      telephone: this.state.contact.telephone,
      mail: this.state.contact.mail
    };

    let id =  + this.props.match.params.id;
    Axios.put(
      `http://localhost:8080/contacts/${id}`,
      studentObject
    )
      .then(function(response) {
        console.log("modif sucess");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.contact.hasOwnProperty('name') );
    console.log('this.state.contact', this.state.contact)
    return (
      <div>
        
        <button onClick={this.clickHandleUpdate}>modif</button>
        {this.state.contact.hasOwnProperty('nom') && <div>
          <p>Contact Name</p>
          <input value={this.state.contact.nom} onChange={v=>this.setState({contact:{nom:v.target.value}})} />
          <p>Contact Telephone</p>
          <input
            value={this.state.contact.telephone}
            onChange={this.onChangeStudentTelephone}
          />
          <p>Contact Email</p>
          <input value={this.state.contact.mail} onChange={this.onChangeStudentMail} />
          <br />
          <button onClick={this.onSubmit}>add Contact</button>
        </div>}
   
      </div>
    );
  }
}

export default Modif;
