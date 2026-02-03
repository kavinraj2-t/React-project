import './Warehousing.css';
import Footer from '../Footer';

function Warehousing() {
  return (
    <div className="warehousing-page">
      <section className="hero-section"  style={{
    backgroundImage: "url('/images/warehousingmain.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="hero-content">
          <h1>Warehousing & Distribution <span className="highlight">Solutions</span></h1>
          <p>Strategic storage and efficient distribution services designed to optimize your supply chain operations.</p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
      <div className="container">
        <section className="services-intro">
          <h2>Comprehensive <span className="highlight">Warehousing Services</span></h2>
          <p>RATHINAVELS provides end-to-end warehousing and distribution solutions tailored to meet the unique requirements of your business. Our state-of-the-art facilities and experienced team ensure your inventory is managed efficiently and delivered precisely when needed.</p>
        </section>

        <section className="service-card-section">
          <div className="service-carda">
            <div className="service-content">
              <h3>Storage Solutions</h3>
              <p>Our modern warehousing facilities are equipped with advanced racking systems, material handling equipment, and inventory management technology to ensure optimal storage conditions for your goods.</p>
              <ul>
                <li>Multi-level racking systems for maximum space utilization</li>
                <li>Specialized storage for hazardous and sensitive materials</li>
                <li>Bonded and non-bonded warehousing options</li>
                <li>Flexible short-term and long-term storage contracts</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/warehousing1.png" alt="Storage Solutions" />
            </div>
          </div>

          <div className="service-carda reverse">
            <div className="service-content">
              <h3>Inventory Management</h3>
              <p>Our advanced Warehouse Management System provides real-time visibility into your inventory levels, movements, and order status, enabling better decision-making and cost control.</p>
              <ul>
                <li>Real-time inventory tracking and reporting</li>
                <li>Barcode and RFID technology integration</li>
                <li>Automated stock replenishment alerts</li>
                <li>Detailed inventory analytics and forecasting</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/warehousing2.png" alt="Inventory Management" />
            </div>
          </div>

          <div className="service-carda">
            <div className="service-content">
              <h3>Order Fulfillment</h3>
              <p>From pick and pack to shipping coordination, our order fulfillment services are designed to ensure accurate and timely delivery of your products to end customers.</p>
              <ul>
                <li>Efficient pick, pack, and dispatch operations</li>
                <li>Quality control and inspection services</li>
                <li>Kitting and assembly services</li>
                <li>Returns management and reverse logistics</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/warehousing3.png" alt="Order Fulfillment" />
            </div>
          </div>

          <div className="service-carda reverse">
            <div className="service-content">
              <h3>Distribution Network</h3>
              <p>Leverage our extensive distribution network to reach your customers faster and more efficiently. Our strategically located facilities ensure optimal delivery times across regions.</p>
              <ul>
                <li>Hub and spoke distribution model</li>
                <li>Cross-docking facilities for faster transit</li>
                <li>Last-mile delivery coordination</li>
                <li>Multi-channel distribution support</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/warehousing4.png" alt="Distribution Network" />
            </div>
          </div>

          <div className="service-carda">
            <div className="service-content">
              <h3>Value-Added Services</h3>
              <p>Beyond basic storage and distribution, we offer a range of value-added services to support your unique business requirements and enhance operational efficiency.</p>
              <ul>
                <li>Labeling, tagging, and packaging customization</li>
                <li>Quality inspection and product testing</li>
                <li>Documentation and compliance management</li>
                <li>Container stuffing and de-stuffing</li>
              </ul>
            </div>
            <div className="service-image">
              <img src="/images/warehousing5.png" alt="Value-Added Services" />
            </div>
          </div>
      <section className="highlights-section">
        <div className="container">
          <h2>RATHINAVELS Warehousing <span className="highlight">Capabilities</span></h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🏢</div>
              <h4>500,000+ sq ft</h4>
              <p>Total warehousing space across multiple strategic locations</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📦</div>
              <h4>Climate Controlled</h4>
              <p>Temperature and humidity controlled storage facilities</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🔒</div>
              <h4>24/7 Security</h4>
              <p>Round-the-clock surveillance and security monitoring</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Real-Time Tracking</h4>
              <p>Advanced WMS for complete inventory visibility</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">🚛</div>
              <h4>Same-Day Dispatch</h4>
              <p>Quick order processing and distribution capabilities</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">✓</div>
              <h4>99.8% Accuracy</h4>
              <p>Industry-leading inventory accuracy and order fulfillment</p>
            </div>
          </div>
        </div>
      </section>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default Warehousing;