import React from 'react';

function HomePage() {
  return (
    <div className="banner">
      <div className="content1">
        {/* <img src="./logo.jpg" height="290" className="logo" /> */}
        <div className='homeButton'>
        <p>
          <i>WELCOME TO <b>LAKSHYA </b> 2024 ORGANISED BY GECK</i>
          <br />
        </p>
          <a href="reg.html">
            <button type="button"><span></span> REGISTER NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
