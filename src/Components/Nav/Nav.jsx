import React, { Component } from 'react';
import './Nav.css'
import './Nav.css'
import logo from '../../assets/images/colorLogoTransparentBackground.png'

class Nav extends  Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light justify-content-end">
                    <img  src={logo} width="65" height="65" alt="dreamers in tech logo"></img>
                    <ul class="nav" >
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About DIT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;