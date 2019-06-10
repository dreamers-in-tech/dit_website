import React from 'react';
import MemberGrid from '../UI/MemberGrid/MemberGrid';

function About() {
  return (
    <div class="bg-info">
      <div>
        Mission
      </div>
      <div class="bg-primary">
        Our Story
      </div>
      <div class="bg-info">
        <div>
          Who are we
        </div>
        <MemberGrid />
      </div>
    </div>
  );
}

export default About;
