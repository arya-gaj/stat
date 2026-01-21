const Hero = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Powered by AI</div>
          <h1>Stat AI: Smarter Energy Grids with <span>Artificial Intelligence</span></h1>
          <p className="hero-subtitle">
            Harnessing artificial intelligence to predict, optimize, and safeguard microgrids for a sustainable energy future.
          </p>
          <div className="cta-group">
            <a href="#about" className="btn-primary" onClick={(e) => handleClick(e, '#about')}>
              Learn More
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#core-product" className="btn-secondary" onClick={(e) => handleClick(e, '#core-product')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Demo
            </a>
          </div>
          <p className="supported-by">Supported by: <strong>CBIT Research & Innovation Hub</strong></p>
        </div>
        <div className="hero-visual">
          <div className="grid-illustration">
            <div className="floating-nodes">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="node node-4"></div>
              <div className="node node-5"></div>
            </div>
            <div className="connection-lines">
              <svg viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6a0dad" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#00bfa5" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <line x1="100" y1="60" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2"/>
                <line x1="320" y1="140" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2"/>
                <line x1="60" y1="220" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2"/>
                <line x1="150" y1="340" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2"/>
                <line x1="300" y1="280" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="2"/>
              </svg>
            </div>
            <div className="grid-center">
              <div className="grid-center-inner">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
