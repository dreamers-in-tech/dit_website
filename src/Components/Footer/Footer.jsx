import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialMedia from '../UI/SocialMedia/SocialMedia';

class Footer extends Component {
  render () {
    return (
      <div>
        <section class="bg-secondary d-flex dir-row justify-content-center align-items-center">
          Footer Component
          <div class="d-flex dir-row pt-3">
          {/* THE BELOW SECTION IS TEMPORARY, NOT MEANT TO BE NAV BAR BUT ONLY TO SHOW <LINK /> FUNCTIONALITY */}
            <ul class="justify-content-center">
              <Link to="home" class=" btn-xs btn-secondary">
                Home
              </Link>
            </ul>
            <ul class="flex-row align-items-center">
              <Link to="About" class="btn-xs btn-secondary">
                About
              </Link>
            </ul>
            <ul class="flex-row align-items-center">
              <Link to="ContactUs" class="btn-xs btn-secondary">
                Contact Us
              </Link>
            </ul>
            <ul>
            <SocialMedia />
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Footer;
