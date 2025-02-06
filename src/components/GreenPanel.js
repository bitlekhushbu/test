import React from "react";
import imageSrc from './images/AGTeq-logo.png';
import './stylepage/GreenPanel.css';

const GreenPanel = () => {
  return (
    <div className="green-panel">
      {/* SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1684.8 60"
        className="absolute top-0 w-full"
        style={{ marginTop: "-38px", transform: "inherit" }}
      >
        <defs>
          <style>{".st3 { fill: #f6f6f6; }"}</style>
        </defs>
        <path
          className="st3"
          d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"
        />
      </svg>

      <div className="green-panel-container">
	
	<div className="logo-icon">
        <img src={imageSrc} alt="AGTeq-logo.png" />
	</div>
		<div className="logo-info">
			<p>AGTEQ Infosoft presents its website carbon calculator tool, fostering awareness and action toward a carbon-neutral internet. Powered by 100% renewable energy, this resource guides users in making eco-friendly digital choices.</p>
		
		</div>

	</div>
    </div>
  );
};

export default GreenPanel;
