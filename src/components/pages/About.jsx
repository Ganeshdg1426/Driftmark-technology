import React from 'react';
import './About.css';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="about-page">

    
      <div className="about-hero-image">
        <img src="https://i.pinimg.com/736x/b6/00/5a/b6005a461776531e60a7ea3121768ace.jpg" alt="Driftmark Overview" />
      </div>

      
      <section className="about-text-section">
  <h2>About Driftmark</h2>

  <p>
    Driftmark is a futuristic digital design agency specializing in gaming-style websites, mobile-ready web apps, and immersive user experiences.
    We blend powerful code with pixel-perfect design to deliver blazing-fast, visually stunning digital products.
  </p>

  <p>
    Our team is made up of passionate developers, creative designers, and bold thinkers — united by the goal of crafting high-performance, interactive platforms.
    From startups to big brands, we help you create a digital presence that stands out in every scroll.
  </p>

  <p>
    Whether it's a one-page animated portfolio or a full-scale business application, we deliver with precision, speed, and style.
    Every project we build is fully responsive, secure, and optimized for user experience.
  </p>

  <p>
    Our design language is inspired by gaming interfaces — dark themes, motion UI, glowing buttons, and futuristic fonts. It's not just web design; it's an experience.
  </p>

  <p>
    We don’t just build websites — we craft portals that reflect your vision, tell your story, and convert your users into loyal fans.
    That’s the Driftmark promise.
  </p>
  <p>
    Whether it's a one-page animated portfolio or a full-scale business application, we deliver with precision, speed, and style.
    Every project we build is fully responsive, secure, and optimized for user experience.
  </p>

 
  <h3>Why Choose Driftmark?</h3>
  <ul>
    <li>⚡ Fast-loading and SEO-optimized websites</li>
    <li>🎮 Gaming-inspired modern design with animations</li>
    <li>📱 Fully responsive for mobile, tablet, desktop</li>
    <li>🔐 Built with latest tech: React, Vite, Firebase</li>
    <li>🤝 100% client-focused, result-driven approach</li>
  </ul>
</section>
   

    </div>
  );
};

export default About;