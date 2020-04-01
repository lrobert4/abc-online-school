import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="ui stackable menu">
                <div className="item">Tunr</div>
                
                <a class="item"><Link to="/">All Artists</Link></a>
                
            </div>
        )
    }
}