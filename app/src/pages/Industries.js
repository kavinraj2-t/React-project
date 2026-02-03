import Footer from "./Footer";
import "./industries.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Industries()
{
   const navigate=useNavigate();
    const [activeIndustry, setActiveIndustry] = useState("manufacturing");

    const content = {
    manufacturing: {
            title: "Manufacturing",
            desc: "End-to-end supply chain management for raw materials, semi-finished, and finished goods. We streamline transportation to keep your production flow uninterrupted and cost-efficient.",
            bg: "/images/industries1.png" 
        },
    automotive: {
        title: "Automobile",
        desc: "Precision handling for heavy components, spare parts, and machinery. From factory to showroom, we deliver with accuracy and care to support continuous production and timely output.",
        bg: "/images/industries2.png" 
    },
    pharmaceutical: {
        title: "Pharmaceutical",
        desc: "Temperature-controlled, compliant, and secure logistics designed for sensitive healthcare products. We ensure safety, hygiene, and integrity at every stage—so you can focus on saving lives.",
        bg: "/images/industries3.png"
        },
    chemical: {
        title: "Chemical & Hazardous Materials",
        desc: "Specialized handling with trained professionals, certified vehicles, and proper safety protocols. We manage critical chemical logistics with precision, responsibility, and regulatory compliance.",
        bg:"/images/industries4.png"
     },
    perishables: {
        title: "Perishables",
        desc: "Reliable cold-chain logistics for food, perishables, FMCG, frozen items, and temperature-sensitive goods, ensuring freshness and safe delivery from origin to destination.",
        bg: "/images/industries5.png" 
    }
    };

    return(
    <>
      <div className="starter" style={{
    backgroundImage: "url('/images/industriesmain.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="starter-container">
        <h1>
            Comprehensive Logistics Solutions for Every Industry
        </h1>
        <p>
             At Rathinavel logistics, we specialize in delivering reliable, efficient, and end-to-end logistics services tailored to the needs of leading industries.
        </p>
        <button className="cta-button"  onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
      </div>
      <div className="industries-container">
      <div className="industries-left">
        {Object.keys(content).map((key) => (
          <button
            key={key}
            className={activeIndustry === key ? "active" : ""}
            onClick={() => setActiveIndustry(key)}
          >
            {content[key].title}
          </button>
        ))}
      </div>

      <div
  className="industries-right"
  style={{
    backgroundImage: `url(${content[activeIndustry].bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2>{content[activeIndustry].title}</h2>
  <p>{content[activeIndustry].desc}</p>
</div>


    </div>
    <div className="closure">
    <p className="Closure-title">Why Choose Us?</p>
    <div className="closure-features">
    <div className="feature-card">🚚
        <h3>Fast & Reliable</h3>
        <p>Swift deliveries that keep your supply chain active.</p>
    </div>

    <div className="feature-card">🏭
        <h3>Industry Expertise</h3>
        <p>Specialized handling for sectors like pharma, auto & more.</p>
    </div>

    <div className="feature-card">🛡️
        <h3>Secure Handling</h3>
        <p>Trained workforce & compliance-ready operations.</p>
    </div>

    <div className="feature-card">📍
        <h3>Custom Solutions</h3>
        <p>Tailored logistics to meet unique business needs.</p>
    </div>
    </div>
    </div>
    <Footer />
    </>
    );
}
export default Industries;<p className="Closure-title">Why Choose Us?</p>