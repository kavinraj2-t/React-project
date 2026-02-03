import "./customclearance.css"
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function Custom() {
  const navigate=useNavigate();
  return (
    <>
      <section className="cc-hero" style={{
    backgroundImage: "url('/images/customclearance.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="cc-ref-box">
          <h1 className="cc-ref-title">
            Customized Solution<br /><span>by RATHINAVELS</span>
          </h1>

          <p className="cc-ref-text">
            RATHINAVEL LOGISTICS Custom Broking Services ensures smooth and compliant customs clearance by expertly handling
            documentation, duty calculation, and regulatory requirements. Approved by the U.S. CBP,
            we enable RLF (Remote Location Filing) to remotely file entries at U.S. ports on behalf of our clients.
          </p>

          <a>
            <button className="cc-ref-btn"  onClick={() => navigate("/contact")}>Contact Us</button>
          </a>
        </div>
      </section>

      <section id="broking" className="cc-content">
        <h2>VELS Custom Broking Services</h2>
        <p>
          VELS provides smooth and compliant customs clearance by managing documentation, duty calculations,
          government inspections and final cargo delivery.<br/>
        </p>
        
        <h3>Experts in Custom Brokerage</h3>
        <p>
          We act as a bridge between customs departments and importers/exporters, ensuring declarations,
          tax estimation, inspections and regulatory compliance.
        </p>

        <p>
          Leveraging our global network, we streamline strategies to save time, reduce stress and improve
          financial efficiency.
        </p>
      </section>

      <section id="classification" className="cc-content cc-light">
        <h2>Classification & Valuation</h2>
        <p>
          Our experts classify goods accurately to ensure proper taxation and valuation as per customs laws.
        </p>
        <ul>
          <li>Packing, freight, insurance & warehousing cost evaluation</li>
          <li>Royalty, license, commission & discount deductions</li>
          <li>Accurate tariff based duty and tax calculation</li>
          <li>Maintenance of audit-ready customs transaction records</li>
        </ul>
      </section>

      <section id="temporary" className="cc-content">
        <h2>Temporary Imports & Carnets</h2>
        <p>
          Temporary Imports and Carnets allow duty-free temporary admission of goods for exhibitions,
          professional equipment and commercial samples.
        </p>
        <p>
          Our specialized team manages Temporary Importation under Bond (TIB) formalities, with fees
          varying based on cargo type and destination country.
        </p>
      </section>

      <section id="why" className="cc-section">
        <h2>Why Choose Vels Logistics?</h2>
        <ul className="cc-list">
          <li>✔ Experienced CHA Professionals</li>
          <li>✔ Quick Clearance Process</li>
          <li>✔ Zero Penalty Compliance</li>
          <li>✔ Real-Time Shipment Support</li>
          <li>✔ 24×7 Customer Assistance</li>
        </ul>
      </section>
      <Footer/>
    </>
  );
}

export default Custom;
