import React from 'react';
import './stylepage/GetBadge.css'; // Assuming you have a separate CSS file for styling
import badgeImage from './images/corbon-img9.png'; // Import your image here

const GetBadge = () => {
  return (
    <div className="get-Badge" id="get_A_Badge">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 1684.8 60"
        style={{
          marginTop: '-18px',
          transform: 'rotate(180deg)',
        }}
      >
        <defs>
          <style>
            {`
              .st5 {
                fill: #f3f3f3;
              }
            `}
          </style>
        </defs>
        <path
          className="st5"
          d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"
        ></path>
      </svg>

      <div className="page-width">
        <div className="badge-container">
          <div className="badge-content-details">
            <h2>Get Your Personalized Badge</h2>
            <p>
              A website carbon emission badge is a digital badge or label
              displaying a website's carbon footprint, typically measured in
              grams of CO2 equivalent (gCO2e) per page view or visitor.
            </p>

            <button>
              <a href="#" className="btn-badge">
                Get the badge
              </a>
            </button>
          </div>
          <div className="badge-media">
            <img src={badgeImage} alt="Badge illustration" title="Badge" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBadge;
