
import "./AboutSection.css";
import JS from "../../assets/AboutPage/javascript.svg";
import Python from "../../assets/AboutPage/python.svg";
import React from "../../assets/AboutPage/react.svg";
import Node from "../../assets/AboutPage/nodejs.svg";
import MongoDB from "../../assets/AboutPage/mongodb.svg";
import GitHub from "../../assets/AboutPage/github.svg";
import TeamworkImage from "../../assets/AboutPage/Teamwork.png";
const AboutSection = () => {
  const techIcons = [
    { name: "JavaScript", src: JS, color: "#3776ab"},
    { name: "Python", src: Python, color: "#3776ab" },
    { name: "React", src: React, color: "#61dafb" },
    { name: "Node.js", src: Node, color: "#339933" },
    { name: "MongoDB", src: MongoDB, color: "#47a248" },
    { name: "GitHub", src: GitHub, color: "#dd0031" },
  ]

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <h1 className="about-title">ABOUT US</h1>
            <p className="about-text">
              Welcome to our club, where a squad of tech enthusiasts unites to turn wild ideas into reality!
            </p>
            <p className="about-text">
              As a premier technical club, we are dedicated to empowering individuals like you with cutting-edge
              knowledge and hands-on experience in various technological domains.
            </p>
            <p className="about-text">
              Whether you're an aspiring programmer, engineer, or tech enthusiast, our club offers a dynamic platform
              filled with workshops, technologies, coding challenges, and hands-on projects. But we don't stop there!
            </p>
          </div>

          <div className="about-right">
            <div className="tech-icons-grid">
              {techIcons.map((tech, index) => (
                <div key={index} className="tech-icon-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={tech.src} alt={tech.name} className="tech-icon"/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-content-bottom">
          <div className="illustration-container">
            <img src={TeamworkImage} alt="Teamwork illustration" className="teamwork-illustration" />
          </div>

          <div className="about-text-right">
            <p className="about-text">
              But we understand that true success in the tech industry requires more than technical know-how alone.
            </p>
            <p className="about-text">
              That's why Tech Vayuna places equal importance on developing essential soft skills that set you apart as a
              well-rounded professional.
            </p>
            <p className="about-text">
              From effective communication and leadership to problem-solving and teamwork, we provide comprehensive
              training to enhance your personal and professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
