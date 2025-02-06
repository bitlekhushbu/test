import React from "react";
import "./stylepage/Content.css";
import img2 from"./images/meauseam-img2.webp";

const Content = () => {
  return (
    <section className="image-with-text"> 
      <div className="page-width">
        <div className="image-with-text-block">
          <div className="image-container">
            <div className="media-banner">
              <img 
                src={img2}
                alt="Museum Data Service Homepage"
                title="Museum Data Service Homepage"
              />
            </div>
          </div>
          <div className="text-container">
            <div className="content-info">
              <h2>Yes, your website affects the planet</h2>
              <p>
                Calculating your website's carbon footprint reveals its environmental impact, inspiring sustainable choices. As we increasingly rely on digital technologies, our online presence impacts the environment. Calculating your website's carbon footprint is essential for sustainability.
              </p>
              <p>
                Websites have an environmental impact, which is measured by the greenhouse gases released from hosting, data transfer, and user interactions. The main contributors to this impact are servers, networks, user devices, and resource-intensive content. Tracking this impact encourages eco-friendly habits, reducing climate change. Data analysis helps design environmentally friendly websites. Regular checks ensure continued responsibility.
              </p>
              <p>Every small improvement makes the internet greener.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Content;
