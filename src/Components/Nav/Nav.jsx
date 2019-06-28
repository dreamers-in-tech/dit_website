import React, { Component } from 'react';
import './Nav.css'
import './Nav.css'
import logo from '../../assets/images/colorLogoTransparentBackground.png'

class Nav extends  Component {
    render() {
        return (
            <div class="nav-div">
                <img class="logo-img"src={logo} width="45" height="45" alt="dreamers in tech logo"></img>
                <nav class="navbar navbar-light justify-content-end">
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