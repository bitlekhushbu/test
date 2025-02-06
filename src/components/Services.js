import React from 'react';
import './stylepage/Services.css';  // Ensure you have the corresponding CSS file
import img10 from './images/good-conversion-rate10.png';
import img11 from './images/research11.png';
import img12 from './images/web-developer12.png';
import img13 from './images/exchange-rate13.png';

const servicesData  = [
  {
    icon: img10,
    title: "Conversion Rate Optimization",
    description:
      "Conversion rates are a critical factor for the success of every e-commerce business. Based on a data-driven approach, we provide suggestions to improve UI/UX as well as conversion rates for your website.",
    colorClass: "blue",
  },
  {
    icon: img11,
    title: "Web & E-commerce Development",
    description:
      "A good-looking site is not enough; it has to perform well too. Whether you need a simple web application, e-commerce development, custom application development, or network security configuration, we have you covered.",
    colorClass: "green",
  },
  {
    icon: img12,
    title: "Online Business Development",
    description:
      "We provide e-commerce and e-learning solutions tailored to all kinds of business needs. Whether through custom e-commerce solutions or platforms like Shopify, BigCommerce, Magento, and WooCommerce, we can help.",
    colorClass: "orange",
  },
  {
    icon: img13,
    title: "App/Plugin Development",
    description:
      "Need a module or plugin for custom integrations in your e-commerce site? We provide tailored solutions to add extended functionality and custom integrations to your web portal.",
    colorClass: "red",
  },
];

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="page-width">
        <div className="services-wrapper">
          <div className="services-heading">
            <h2>Our Services</h2>
          </div>

          <div className="services-cards">
            {servicesData.map((service, index) => (
              <div className="about-standardise_card-wrap" key={index}>
                <div className={`service-card ${service.colorClass}`}>
                  <div className="service-icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-cont-heading">{service.title}</h4>
                    <p className="service-data-content">{service.description}</p>
                  </div>
                </div>
                <div className={`about-standardise_blog-wrap ${service.colorClass}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
