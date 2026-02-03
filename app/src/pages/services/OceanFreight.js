import React from "react";
import "./Oceanfreight.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function OceanFreight() {
  const navigate=useNavigate();
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>
            The Coast is Clear <br />
            <span>with RATHINAVEL'S LOGISTICS</span>
          </h1>
          <p>
            RATHINAVEL Logistics ensures your cargo is handled safely across
            international waters. Our expertise, global network and agile
            operations make your ocean freight smooth and reliable.
          </p>
          <a onClick={() => navigate("/contact")} className="btn">Get Quote</a>
        </div>

        <div className="hero-shape"></div>
        <img
          src="/images/oceanfreight1.png"
          alt="Ocean Freight"
          className="ship"
        />
      </section>

      <section className="about">
        <div className="container">
          <h2>Rathinavel's Logistics Services for Ocean Freight</h2>
          <p>
            Rathinavel's Logistics offers comprehensive ocean freight forwarding
            solutions connecting India with global markets including Asia,
            Europe, USA, Middle East and Africa.
          </p>
        </div>
      </section>

      <section className="fcl">
        <div className="container fcl-grid">
          <div>
            <h2>Full Container Load (FCL)</h2>
            <p>
              Our FCL services provide dedicated container shipments for
              customers shipping large volumes. From booking to documentation,
              we handle everything.
            </p>
            <ul>
              <li>Door to Door / Port to Port shipping</li>
              <li>Free days & flexible handling</li>
              <li>Worldwide container availability</li>
              <li>Secure documentation & tracking</li>
            </ul>
          </div>

          <img
            src="/images/oceanfreight2.png"
            alt="FCL"
          />
        </div>
      </section>

      <section className="lcl">
        <div className="container fcl-grid">
          <img
            src="/images/oceanfreight3.png"
            alt="LCL"
          />

          <div>
            <h2>Less Container Load (LCL)</h2>
            <p>Ideal for small and medium shipments with consolidated cargo.</p>
            <ul>
              <li>Cost-efficient shipping</li>
              <li>Weekly global sailings</li>
              <li>Safe consolidation handling</li>
              <li>Real-time cargo tracking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="reefer">
        <div className="container fcl-grid">
          <div>
            <h2>Reefer & Special Cargo</h2>
            <p>
              Temperature controlled logistics for pharmaceuticals, food and
              perishables.
            </p>
            <ul>
              <li>Reefer container availability</li>
              <li>Real-time temperature monitoring</li>
              <li>Special cargo documentation</li>
              <li>Custom clearance assistance</li>
            </ul>
          </div>

          <img
            src="/images/oceanfreight4.png"
            alt="Reefer Cargo"
          />
        </div>
      </section>

      <section className="premium-services">
        <div className="container">
          <h2 className="section-title">Premium Ocean Freight Services</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Smart Route Optimization</h3>
              <p>
                AI-based route planning to ensure fastest, safest and lowest-risk
                shipping lanes.
              </p>
              <ul>
                <li>Reduced transit time</li>
                <li>Weather-aware routing</li>
                <li>Lower detention costs</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Green Ocean Shipping</h3>
              <p>
                Low emission carrier options with carbon footprint reporting.
              </p>
              <ul>
                <li>Eco-friendly sailing</li>
                <li>Carbon reports</li>
                <li>Green certification</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Rapid Port Clearance</h3>
              <p>Pre-filed customs documents for faster gate-out.</p>
              <ul>
                <li>Priority clearance</li>
                <li>Lower demurrage</li>
                <li>Same day delivery</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>ColdChain Secure™</h3>
              <p>
               <br/> Real-time reefer monitoring for pharma & perishable cargo.
              </p>
              <ul>
                <li>Live temperature logs</li>
                <li>Deviation alerts</li>
                <li>Emergency backup containers</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Project & Oversize Cargo</h3>
              <p>Heavy machinery & industrial cargo handling.</p>
              <ul>
                <li>Lifting & rigging</li>
                <li>Route surveys</li>
                <li>Escort coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Ship with RATHINAVEL?</h2>
        <p>Contact our logistics experts today and get your cargo moving.</p>
        <a onClick={() => navigate("/contact")} className="btn dark">Contact Now</a>
      </section>

      <Footer/>
    </>
  );
}

export default OceanFreight;
