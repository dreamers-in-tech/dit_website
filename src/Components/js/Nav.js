import React, { Component } from 'react';
//import './Nav.css'
// import './App.css'

class Nav extends  Component {
    render() {
        return (
            <div>
                {

                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About DIT</a>
                        </li>
                        <li >
                            <a  href="/">Contact Us</a>
                        </li>
                    </ul>

                }
            </div>
        )
    }
}

export default Nav;