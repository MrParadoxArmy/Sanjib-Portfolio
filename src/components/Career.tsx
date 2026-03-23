import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Volunteer</h4>
                <h5>HackHorizon, Arka Jain University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Coordinated event workflow, team support, and participant management
              for a 2-Day Program.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>May 2025</h3>
            </div>
            <p>
              Developed a basic network sniffer tool, created phishing awareness
              training modules, and designed prevention techniques for organizational awareness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>Jun 2025</h3>
            </div>
            <p>
              Developed an NLP-based FAQ chatbot and deep-learning music generation model.
              Trained and deployed ML models for system integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Elevate Labs</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Performed mobile app vulnerability assessments across Android and iOS.
              Collaborated with engineers to document security weaknesses safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
