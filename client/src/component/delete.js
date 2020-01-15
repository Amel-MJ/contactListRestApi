import React, { Component } from 'react'
import Axios from 'axios'

class Delete extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           contact:[]
        }
        
    }
    

    clickHandleDelete = () => {
      let id = this.props.id
      console.log(id)
      Axios.delete(`http://localhost:8080/contacts/${id}`)
          .then(function (response) {
            console.log("delete sucess");
          })
          .catch(function (error) {
            console.log(error);
          });
    }
 
    render() {
        return (
            <div>
               <button onClick={this.clickHandleDelete}>delete</button> 
            </div>
        )
    }
}

export default Delete