import React, { Component } from "react";
import Axios from "axios";
import Add from "./add";
import Modif from "./update";
import Delete from "./delete";
import { Link } from "react-router-dom";

class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [],
      
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

 
 
  render() {
    
   
    const contactItems = this.state.contact.map((el,id) => (
     
       <div key={el._id} className="contactMap">
        <p>nom:{el.nom}</p>
        <p>tel:{el.telephone}</p>
        <p>mail:{el.mail}</p>
        <div className="contactModDel">
        <Modif id={el._id}/>
        <Delete id={el._id}/>
        </div>
       
      </div>
     
    ));
    return (
      <div>
        <Link to={`/`} > <button >Contact List</button></Link>
        <Link to={`/Contacts/`}><button >ADD</button></Link>
   
      </div>
    );
  }
}

export default contact;
