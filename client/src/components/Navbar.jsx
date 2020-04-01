import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>Tunr</h1>
                <div>
                    <div><Link to="/">All Artists</Link></div>
                </div>
            </div>
        )
    }
}