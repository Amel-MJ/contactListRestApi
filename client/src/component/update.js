import React, { Component } from 'react'
import Axios from 'axios'

class Modif extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contact: {
                "nom": "",
                "telephone": "",
                "mail":""
            }
        }
    }

    clickHandleUpdate = () => {
        let id = this.props.id
         Axios.put(`http://localhost:8080/contacts/${id}`,
           this.state.contact )
          .then(function (response) {
            console.log("modif sucess");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div>
               <button onClick={this.clickHandleUpdate}>modif</button> 
            </div>
        )
    }
}

export default Modif