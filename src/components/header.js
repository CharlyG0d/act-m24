import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
    }
    render(){
        return (
        <header>
            <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">Email</a></li>
             <li><a href="#">Phone</a></li>
            </ul>
        </header>
        )
    }
}

export default Header;
