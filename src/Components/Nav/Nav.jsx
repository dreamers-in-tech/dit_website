import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
// import './App.css'

class Nav extends  Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <ul>
                        <Link to="home" class="">
                            Home
                        </Link>
                    </ul>
                    <ul>
                        <Link to="about" class="">
                            About
                        </Link>
                    </ul>
                    <ul>
                        <Link to="contact" class="">
                            Contact
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;