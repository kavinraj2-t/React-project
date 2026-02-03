import './AirFreight.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


function AirFreight() {
  const navigate=useNavigate();
  return (
    <>
    <div className="airfreight-page">

      <section className="hero-section"  style={{
    backgroundImage: "url('/images/airfreightimg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}  >
        <div className="hero-content">
          <h1>Sky is the Limit with <span className="highlight">RATHINAVELS</span></h1>
          <p>Our global freight network offers a one-stop solution to manage and transport your valuable shipments worldwide.</p>
          <button className="cta-button" onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>

      <div className="container">
        <section className="services-intro">
          <h2>RATHINAVELS Services for <span className="highlight">Air freight</span></h2>
          <p>RATHINAVELS is a certified IATA (International Air Transport Association) company with a well-established global freight network. With Temperature Controlled, Hazardous, and Oversized Cargo solutions manage your valuable shipments worldwide in a single-window solution.</p>
        </section>

        <section className="service-card-section">
          <div className="service-carda">
            <div className="service-content">
              <h3>General Air Cargo</h3>
              <p>As an international air freight forwarder, our qualified team monitors each and every shipment using a closed-circuit camera system until it reaches its destination. Our shipping technology is integrated with our company's security personnel to ensure transparency in safeguarding your valuable cargo.</p>
              <ul>
                <li>Over a decade of air freight experience</li>
                <li>Expert & qualified staff in all 25+ locations globally</li>
                <li>End to end logistics</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/airfreight5.png" alt="General Air Cargo" />
            </div>
          </div>

          <div className="service-carda reverse">
            <div className="service-content">
              <h3>Pharma and Temperature Controlled Solutions</h3>
              <p>RATHINAVELS ensures that pharmaceuticals and all other temperature controlled cargo are in the same state throughout the transit as it was brought for the delivery. Proactive tracking and monitoring 24/7/365 ensure total assurance of shipping conditions throughout transit.</p>
              <ul>
                <li>Providing reassurance through process management for GxP-compliant shipments.</li>
                <li>Intervention management capabilities to address any deviations from standard operating procedures (e.g., temperature, humidity, etc.)</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/airfreight1.png" alt="Temperature Controlled" />
            </div>
          </div>

          <div className="service-carda">
            <div className="service-content">
              <h3>Critical Cargo Handling</h3>
              <p>RATHINAVELS meets all your export/import air cargo needs, including specialized cargo handling, documentation, customs processing, security screening, short- and long-term warehousing, and door-to-door logistics.</p>
              <ul>
                <li>Cargo handling strictly adheres to airline guidelines and variations.</li>
                <li>Our training programs, systems, and procedures are crafted to ensure strict compliance with all government and industry regulations, guidelines, and practices.</li>
                <li>We offer cost-effective long-term or short-term bonded storage, transportation, and handling for your Freight Container Station and consolidated shipments.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/airfreight2.png" alt="Critical Cargo" />
            </div>
          </div>

          <div className="service-carda reverse">
            <div className="service-content">
              <h3>Safety and Compliance</h3>
              <p>Our skilled and experienced cargo specialists are fully accredited and committed to providing safe, secure, efficient, and courteous service. With just one phone call, you can address all of your air cargo handling needs.</p>
              <ul>
                <li>Our customers rely on us for safe, efficient, and professional ground handling, transitioning, segregation, and storage of their dangerous goods (DG) import and export air cargo.</li>
                <li>RATHINAVELS offers a comprehensive range of ground service options to address your local, regional, national, and cross-border distribution needs.</li>
                <li>RATHINAVELS ensures your imported items remain secure and are shipped reliably with our Customs Bonded Warehousing.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/airfreight3.png" alt="Safety and Compliance" />
            </div>
          </div>

          <div className="service-carda">
            <div className="service-content">
              <h3>Trusted Network</h3>
              <p>We ensure your cargo reaches its destination on time, every time. By partnering with carefully selected carriers and operating schedules on major global routes, we help you plan with confidence and fulfill your commitments.</p>
              <ul>
                <li>By working Globally we offer our international freight services to every nook and corner of the world.</li>
                <li>We possess our own warehouses and dedicated transport systems at Mumbai, India for handling Air Cargo.</li>
                <li>Our global network of local customs experts ensures the smooth and compliant movement of your goods, no matter where you trade.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/airfreight4.png" alt="Trusted Network" />
            </div>
          </div>
        </section>
        <section className="why-charter">
          <h2>Why <span className="highlight">Air Charter</span></h2>
          <div className="charter-grid">
            <div className="charter-item">
              <div className="charter-icon">🔒</div>
              <h4>Secure, reliable capacity</h4>
              <p>Access numerous air routes and schedules globally for dependable transport.</p>
            </div>
            <div className="charter-item">
              <div className="charter-icon">🎯</div>
              <h4>Complete control and transparency</h4>
              <p>Especially useful for time critical, temperature controlled and high-value shipments.</p>
            </div>
            <div className="charter-item">
              <div className="charter-icon">⚡</div>
              <h4>Faster turnaround</h4>
              <p>Our network uses gateways at less congested airports in terms of passenger flights and overall aircraft movements.</p>
            </div>
            <div className="charter-item">
              <div className="charter-icon">⏱️</div>
              <h4>Manage time-critical shipments</h4>
              <p>Our expert on-board couriers (OBC) can accompany your cargo, receiving higher priority in carriage on board specific flights.</p>
            </div>
            <div className="charter-item">
              <div className="charter-icon">🌍</div>
              <h4>Nowhere is too remote</h4>
              <p>Our close partnerships with reliable, smaller charter providers as well as selected, pre-approved carriers ensure smooth operations.</p>
            </div>
            <div className="charter-item">
              <div className="charter-icon">⭐</div>
              <h4>First class strategic experience</h4>
              <p>Experts dedicated to organizing ad-hoc air charter services and skilled in chartering all types of cargo aircraft.</p>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <h2><span className="highlight">Reliable Logistics</span> Delivered On Time</h2>
          <p>RATHINAVELS provides the most economical logistics solutions including Warehousing, Air-Ocean-Road Transportation, & ISO containers.</p>
          <button className="cta-button" onClick={() => navigate("/contact")}>Contact Us</button>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default AirFreight;