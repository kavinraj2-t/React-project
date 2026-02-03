import "./Aboutus.css";
import { useState } from "react";
import Footer from "./Footer";

function About() 
{
  const [activeTopic, setActiveTopic] = useState("custom"); 
  const descriptions = {
    custom: "Custom Broking: Adaptability to Change is the basic requirement for success . As we are in this industry for the past three decades and are capable of handling all types clearance. We are specialist in Alerting the customer with timely requirement of documents for hassle free clearances . We are affiliated to Chennai Customs Broker Association. This helps us to get the Amended Circulars New Notifications , Procedural Changes , Meeting with Customs Officials and Participatory Government Agencies like Plant Quarantine , Animal Quarantine , Wild Life Office , Textile Committee etc.",
    transportation: "Transportation: We have MOU's signed with leading transporters to offer timely delivery of cargo with utmost care. As we know that the finishing is to be perfect and the logistics cannot be delivered without active participation of transporter, we involve ourselves in each and every point of the movement of Cargo from loading to unloading vice versa.",
    warehousing: "Warehousing: We provide our customers the Facility of Warehousing - both Customs Bonded & General Warehouse solutions under SEC 59 of Customs Act 1962",
  };
  return (
    <>
    <section className="about-section" >
      <div className="about-container" style={{
    backgroundImage: "url('/images/Aboutusmain.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <h1 className="about-title">About Us</h1>
        <p className="about-tagline">
          Rathinavel Logistics delivers goods, trust, and quality through our services.<br/>
          Words doesn't make the world beautiful. Only the work makes the world beautiful.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>Our Mission</h3>
            <p>Exceeding your Expectations (EYE) </p>
          </div>
          <div className="highlight-card">
            <h3>Our Vision</h3>
            <p>To redefine logistics with innovation, speed, and trust — creating a smarter, safer, and more connected world for our customers.</p>
          </div>
          <div className="highlight-card">
            <h3>Our Values</h3>
            <p>Integrity, Teamwork & Customer Satisfaction.</p>
          </div>
        </div>
      </div>
       <div className="about-container">
      <div className="about-menu">
        <p 
          className={activeTopic === "custom" ? "active" : ""} 
          onClick={() => setActiveTopic("custom")}
        >
          Custom Broking
        </p>
        <p 
          className={activeTopic === "transportation" ? "active" : ""} 
          onClick={() => setActiveTopic("transportation")}
        >
          Transportation
        </p>
        <p 
          className={activeTopic === "warehousing" ? "active" : ""} 
          onClick={() => setActiveTopic("warehousing")}
        >
          Warehousing
        </p>
      </div>
      <div className="about-description">
        <h2>What We Do</h2>
        <p>{descriptions[activeTopic]}</p>
      </div>
    </div>
      <div className="directors">
        <p className="director-title">Key Personalities</p>
        <div className="director-cards-wrapper">
        <p className="director">
            S. Parthiban - Director<br/>
            Mobile : +91-9884554400<br/>
            Mail id : parthibansrinivasan@velslogistics.com<br/>
        </p>
        <p className="director">
            P.Thirumoorthy - Director<br/>
            Mobile : +91-9843606206<br/>
            Mail id : thiru.moorthy@velslogistics.com<br/>
        </p>
        <p className="director">
            Mr.Suresh - Asst. Manager Documentation / Operation<br/>
            Mobile No : 9629173292<br/>
            Mail id : docs@velslogistics.com<br/>
        </p>
        <p className="director">
            Mr.Gopi - Asst. Manager - Accounts / Admin<br/>
            Mobile No : 7812888471<br/>
            Mail id : accounts@velslogistics.com<br/>
        </p>
      </div>
      </div>
    </section>
     <Footer/>
     </>
  );
};

export default About;
