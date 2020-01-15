import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to={'/Contacts'} > <button >Contact List</button></Link>
                <Link to={'/AddContacts'}><button >ADD</button></Link>
                
            </div>
        )
    }
}
