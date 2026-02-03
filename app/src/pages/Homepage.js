import './Homepage.css'; 
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  return (
    <div className="home"> 
      <section className="hero"  style={{
    backgroundImage: "url('/images/homepage.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
        }}>
        <div className="hero-overlay">
          <h1>Licensed Customs Broker & Integrated Logistics Partner</h1>
          <p>
            Delivering seamless customs broking, transportation, and
            warehousing solutions for global EXIM trade.
          </p>
          <div className="hero-buttons">
            <button className="btn secondary" onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-box">
          <h2>30+</h2>
          <p>Years Industry Expertise</p>
        </div>
        <div className="stat-box">
          <h2>10+</h2>
          <p>CFS & Cargo Locations</p>
        </div>
        <div className="stat-box">
          <h2>1000+</h2>
          <p>Shipments Handled</p>
        </div>
        <div className="stat-box">
          <h2>24/7</h2>
          <p>Operational Support</p>
        </div>
      </section>

      <section className="services">
        <h2 className="section-title">Our Core Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Customs Broking</h3>
            <p>
              Expert import & export clearance with up-to-date compliance,
              documentation, and regulatory support.
            </p>
          </div>
          <div className="service-card">
            <h3>Transportation</h3>
            <p>
              Reliable cargo movement through trusted transport partners with
              real-time coordination.
            </p>
          </div>
          <div className="service-card">
            <h3>Warehousing & Distribution</h3>
            <p>
              Customs Bonded & General Warehousing solutions under Sec 59 of
              Customs Act, 1962.
            </p>
          </div>
        </div>
      </section>

      <section className="why">
        <h2 className="section-title">Why Choose Rathinavel Logistics?</h2>
        <ul>
          <li>Licensed & experienced customs broker</li>
          <li>Strong operational presence at CFS & Air Cargo Complex</li>
          <li>Dedicated documentation & operations team</li>
          <li>Transparent processes & timely delivery</li>
          <li>Personalized logistics solutions</li>
        </ul>
      </section>

      <section className="specialization">
        <h2 className="section-title">Our Specialization</h2>
        <div className="spec-grid">
          <div onClick={() => navigate('/services/customs-clearance')}>CustomsClearance</div>
          <div onClick={() => navigate('/services/ocean-freight')}>OceanFreight</div>
          <div onClick={() => navigate('/services/road-transport')}>RoadTransport</div>
          <div onClick={() => navigate('/services/Warehousing')}>Warehousing </div>
          <div onClick={() => navigate('/services/air-freight')}>AirFreight</div>
        </div>
      </section>

      <section className="cta">
        <h2>Looking for a Reliable Logistics Partner?</h2>
        <p>
          Let us manage your cargo while you focus on growing your business.
        </p>
        <button className="btn primary" onClick={() => navigate("/contact")}>Contact Us</button>
      </section>
    <Footer/>
    </div>
  );
}

export default Home;

