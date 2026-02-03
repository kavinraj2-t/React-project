import './RoadTransport.css';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function RoadTransport() {
  const navigate=useNavigate();
  return (
    <>
    <div className="roadtransport-page">
      <section className="hero-section"  style={{
    backgroundImage: "url('/images/roadtransportmain.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        
        <div className="hero-content">
          <h1>Take the High Road <span className="highlight">with RATHINAVELS</span></h1>
          <p>RATHINAVELS provides high-quality road transportation, ranging from standard services like Less-than-Truck Load (LTL) or Full-Truck Load (FTL) shipments to temperature-controlled and highly secured transports.</p>
          <button className="cta-button"  onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </section>
      <div className="container">
        <section className="services-intro">
          <h2>RATHINAVELS Services for <span className="highlight">Road Transportation</span></h2>
          <p>RATHINAVELS is a leading provider of road freight services in India. Our Full Truck Load, Less Than Truck Load, Specialized Cargo, and temperature-controlled services are available across India. We manage a wide range of cargo movements with precision and care.</p>
        </section>

        <section className="service-card-section">
          <div className="service-cardb">
            <div className="service-content">
              <h3>Experts in Trucking Logistics</h3>
              <p>With over a decade of experience RATHINAVELS manages a wide range of cargo movements, including Normal and Over Dimensional Cargo (ODC), Full Truck Load, Less Than Truckload, Refrigerated movements, Container movements, White Glove Services, and Event Management.</p>
              <ul>
                <li>RATHINAVELS's GPS-equipped trucks provide accurate monitoring and complete shipment track-and-trace visibility.</li>
                <li>GPS-equipped trucks to accurately monitor and provide complete track-and-trace visibility.</li>
                <li>Our surface cargo movement operates under an asset-light model, supported by real-time tracking.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/roadtransport1.png" alt="Trucking Logistics" />
            </div>
          </div>

          <div className="service-cardb reverse">
            <div className="service-content">
              <h3>Strong Domestic Trucking Network</h3>
              <p>Our team understands your needs and provides customized solutions. RATHINAVELS Logistics strives to minimize your costs and delivery time while maximizing your satisfaction.</p>
              <ul>
                <li>RATHINAVELS's pan-India operations is supported by a large fleet of trucks, tankers, trailers, tippers, and medium-sized vehicles.</li>
                <li>RATHINAVELS possesses the capability and intermodal logistics solutions to successfully meet all client requirements within a given time frame. The vehicles are frequently inspected for transit fitness.</li>
                <li>RATHINAVELS has a team of experts who offer cost-effective trucking services along with consultancy services.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/roadtransport2.png" alt="Domestic Network" />
            </div>
          </div>

          <div className="service-cardb">
            <div className="service-content">
              <h3>Cargo Safety</h3>
              <p>Delivering with no loss is the policy of RATHINAVELS. Our experienced road transport shipping services team is dedicated to delivering your cargo without any mishaps.</p>
              <ul>
                <li>RATHINAVELS handles solid cargo such as heavy steel pipes, coils, TMT bars, billets, agricultural commodities, cement, coal, coke, and iron ore.</li>
                <li>RATHINAVELS also provides reliable solutions for the transportation of liquid cargo, including high-speed diesel (HSD), aviation turbine fuel (ATF), petrol, furnace oil, edible oil, and chemicals.</li>
                <li>RATHINAVELS handles the transportation of cargo, including import and export containers. VELS possesses the knowledge and framework necessary for the damage-free transportation of multidimensional cargo and heavy plant machinery to distant locations.</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/roadtransport3.png" alt="Cargo Safety" />
            </div>
          </div>
        </section>
      <section className="highlights-section">
        <div className="container">
          <h2>RATHINAVELS Road Transportation <span className="highlight">Highlights</span></h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🚚</div>
              <p>Network of 2000+ fleet owners for specialised requirements</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏭</div>
              <p>Tailor-made distribution services like Milk Run Distribution via Hub & Spoke model</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🏆</div>
              <p>9k+ shipments via full-truck-load services</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🌍</div>
              <p>Optimised transit times on long-haul inbound & outbound across India</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <p>Dedicated team of account managers for each customer, resulting in 95% + service levels</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">💰</div>
              <p>Reduced transportation costs by 15-20%</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default RoadTransport;