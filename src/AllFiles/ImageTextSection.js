import React from 'react';
import imageSrc from '../assets/museum-data-service-home-page-de.jpg';
import './ImageTextSection.css'; // Import the CSS file

const ImageTextSection = () => {
  return (
    <div className="image-text-container">
      {/* Image Section */}
      <div className="image-container">
        <img src={imageSrc} alt="Museum Data Service" />
      </div>

      {/* Text Section */}
      <div className="text-container">
        <h2>Yes, your website affects the planet</h2>
        <p>
        Calculating your website's carbon footprint reveals its environmental impact, inspiring sustainable choices. As we increasingly rely on digital technologies, our online presence impacts the environment. Calculating your website's carbon footprint is essential for sustainability.
        </p>
        <p>
        Websites have an environmental impact, which is measured by the greenhouse gases released from Hosting, Data Transfer, and user Interactions. The main contributors to this impact are Servers, Networks, User devices, and Resource-intensive content. Tracking this impact encourages eco-friendly habits, reducing climate change. Data analysis helps design environmentally friendly websites. Regular checks ensure continued responsibility.
        </p>
        <p>
        Every small improvement makes the internet greener.
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
