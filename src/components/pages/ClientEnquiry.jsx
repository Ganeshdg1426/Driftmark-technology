import React from 'react';
import './ClientEnquiry.css';
import Footer from '../Footer';

const ClientEnquiry = () => {
  return (
    <div className="client-enquiry-page">

      <div className="client-top">
        <h1>
          Your Success
          Is Our Goal
        </h1>
      </div>

     
      <section className="client-form-wrapper">
        <h2 className="form-title">Let's Work Together</h2>

        <form className="client-form-simple">
          <div className="form-row">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Contact No." required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Website Requirement" required />
          </div>
          <div className="form-row">
            <input type="text" placeholder="City / State" required />
          </div>
          <div className="form-row">
            <textarea rows="4" placeholder="Note..." required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default ClientEnquiry;
