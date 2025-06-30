import React from 'react';
import './Service.css';
import Footer from '../Footer';

const Services = () => {
  return (
    <div className="services-page">
      
      <h2 className="services-heading">What is your requirement?</h2>

      
      <div className="services-cards">
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/9068/9068786.png" alt="App Development" />
          <h3>Application Development</h3>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png" alt="Web Development" />
          <h3>Web Development</h3>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922661.png" alt="Responsive Design" />
          <h3>Responsive Application</h3>
        </div>
      </div>

      
      <div className="service-qa">
        <h3>Common Service Questions</h3>
        <p><strong>1. Do you build mobile apps?</strong><br />Yes, we build cross-platform apps using modern frameworks like React Native.</p>
        <p><strong>2. Are your websites SEO optimized?</strong><br />Absolutely. All our projects follow SEO best practices.</p>
        <p><strong>3. How responsive are your websites?</strong><br />Our websites work perfectly on phones, tablets, and desktops.</p>
      </div>

     
    </div>
  );
};

export default Services;