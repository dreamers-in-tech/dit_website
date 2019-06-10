import React from 'react';
import SurveyButton from '../UI/Buttons/SurveyButton';

function Home() {
  return (
    <div>
      <div class="bg-info">
        DIT-Image and title
      </div>
      <div class="bg-primary">
        Short About us
      </div>
      <div class="bg-info">
        <div>
          How you can Help
        </div>
        <SurveyButton />
      </div>
    </div>
  );
}

export default Home;
