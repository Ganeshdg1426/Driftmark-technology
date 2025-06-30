import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer';

const Home = () => {
  const navigate = useNavigate();

  const scrollSlider = (direction) => {
  const slider = document.getElementById('slider');
  const scrollAmount = 320;
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth',
  });
};


  return (
    <div className="home">
     
      <section className="hero" >

      </section>

     
<section className="about-preview">
  <div className="about-container">
    

    <div className="about-image">
      <img src="/images/about-glow.png" alt="Driftmark Preview" />
    </div>

 
    <div className="about-content">
      <h2>Who We Are</h2>
      <p>
        Driftmark is a futuristic digital agency that focuses on next-gen web solutions.
        With 1.5+ years of experience, we’ve delivered 4+ big projects to over 500+ happy clients worldwide.
        Our passion is building powerful applications, modern websites, and responsive systems that help businesses grow.
        We believe in performance, creativity, and delivering results that matter.
        Every project is a new opportunity to push digital boundaries.
        Our team is made up of creative thinkers, coders, and designers.
        We don’t just build websites, we build <strong>experiences</strong>.
        From idea to execution – Driftmark delivers excellence.
        Ready to build something amazing? Let’s talk!
      </p>

   
      <div className="about-cards">
        <div className="card">
          <h4>1.5+ Years</h4>
          <p>Experience</p>
        </div>
        <div className="card">
          <h4>4+ Projects</h4>
          <p>Delivered</p>
        </div>
        <div className="card">
          <h4>500+ Clients</h4>
          <p>Worldwide</p>
        </div>
      </div>

      
      <div className="about-button">
   <button onClick={() => navigate('/about')}>
  More About Us
</button>


      </div>
    </div>
  </div>
</section>


     <section className="home-services-preview">
  <h2 className="section-heading">What is your requirement?</h2>

  <div className="service-cards">
   
    <div className="service-card">
      <img src="/images/app-icon.png" alt="App Development" />
      <h3>Application Development</h3>
      <p>We build scalable, modern applications tailored to your business goals with seamless UI/UX and powerful performance.</p>
    </div>

   
    <div className="service-card">
      <img src="/images/web-icon.png" alt="Web Development" />
      <h3>Web Development</h3>
      <p>From landing pages to complex platforms, we deliver responsive, fast-loading, SEO-friendly websites with style.</p>
    </div>

    <div className="service-card">
      <img src="/images/responsive-icon.png" alt="Responsive Design" />
      <h3>Responsive Applications</h3>
      <p>We make sure your apps look great and work flawlessly on mobile, tablet, and desktop devices using modern tech.</p>
    </div>
  </div>

  <div className="services-button">
<button onClick={() => navigate('/services')}>
  View Services
</button>


  </div>
</section>


 
<section className="home-contact">
  <h2>Want to connect with us?</h2>

  <div className="slider-container">
    <button className="arrow left" onClick={() => scrollSlider(-1)}>←</button>
    <div className="contact-slider" id="slider">
      <img src="/images/contact1.jpg" alt="Preview 1" />
      <img src="/images/contact2.jpg" alt="Preview 2" />
      <img src="/images/contact3.jpg" alt="Preview 3" />
      <img src="/images/contact4.jpg" alt="Preview 4" />
      <img src="/images/contact5.jpg" alt="Preview 5" />
    </div>
    <button className="arrow right" onClick={() => scrollSlider(1)}>→</button>
  </div>

  
 <button onClick={() => navigate('/contact')}>
  Contact
</button>
</section>
    </div>
  );
};

export default Home;