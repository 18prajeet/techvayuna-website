import "./Domains.css";
import { useState } from "react";


import WD from "../../assets/AboutPage/technical.png";
import Design from "../../assets/AboutPage/design.png";
import AI from "../../assets/AboutPage/ai.png";
import CP from "../../assets/AboutPage/cp.jpeg";
import DA from "../../assets/AboutPage/data_analytics.png";
import PR from "../../assets/AboutPage/pr.png";
import Media from "../../assets/AboutPage/media.png";
import Content from "../../assets/AboutPage/contentt.png";


const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(null);
  const domains = [
    { name: "WEB DEVELOPMENT", src:WD, color: "rgba(147, 51, 234, 0.8)" },
    { name: "DESIGN", src:Design, color: "rgba(147, 51, 234, 0.8)" },
    { name: "ARITIFICIAL INTELLIGENCE", src:AI, color: "rgba(147, 51, 234, 0.8)" },
    { name: "COMPETITIVE PROGRAMMING", src:CP, color: "rgba(147, 51, 234, 0.8)" },
    { name: "DATA ANALYTICS", src:DA, color: "rgba(147, 51, 234, 0.8)" },
    { name: "PUBLIC RELATION", src:PR, color: "rgba(147, 51, 234, 0.8)" },
    { name: "MEDIA", src:Media, color: "rgba(147, 51, 234, 0.8)" },
    { name: "CONTENT", src:Content, color: "rgba(147, 51, 234, 0.8)" },
  ];

  return (
    <section className="domains-section">
      <div className="domains-container">
        <h2 className="domains-title">Our Domains</h2>
        <div className="domains-grid">
          {domains.map((domain, index) => (
            <div key={index} className="domain-card"  onClick={() => setActiveDomain(domain.name)} style={{ background: domain.color }}>
              <span className="domain-icon">{domain.icon}</span>
              <img src={domain.src} alt={domain.name} className="domain-icon"/>
              <span className="domain-name">{domain.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Domains
