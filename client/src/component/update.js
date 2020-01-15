import React, { Component } from 'react'
import Axios from 'axios'

class Modif extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contact: {
                "nom": "test4444",
                "telephone": 85963214,
                "mail":"ppppp@ffff.ff"
            }
        }
    }

    clickHandleUpdate = () => {
         Axios.put('http://localhost:8080/contacts/5e1cdff167aa77207080e8b2',
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