import React, { Component } from 'react';
import '../css/Nav.css'
// import './App.css'

class Nav extends  Component {
    render() {
        return (
            

            
            <div>

                <nav class="navbar navbar-dark bg-dark">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About DIT</a>
                        </li>
                        <li >
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                

                    

            </div>
        )
    }
}

export default Nav;