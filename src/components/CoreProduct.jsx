import { useEffect, useRef } from 'react';

const CoreProduct = () => {
  const flowStepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    flowStepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    'Real-time data collection from multiple grid sources',
    'Advanced simulation of voltage fluctuations and load patterns',
    'Predictive analytics for proactive maintenance',
    'Seamless integration with existing infrastructure',
  ];

  const flowSteps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
      ),
      title: 'Data Collection',
      subtitle: 'IoT sensors & smart meters',
      showArrow: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: 'Simulation Engine',
      subtitle: 'Scenario modeling & testing',
      showArrow: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10"/>
          <path d="M18 20V4"/>
          <path d="M6 20v-4"/>
        </svg>
      ),
      title: 'AI Analysis',
      subtitle: 'Pattern recognition & insights',
      showArrow: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      title: 'Actionable Insights',
      subtitle: 'Automated recommendations',
      showArrow: false,
    },
  ];

  return (
    <section id="core-product" className="core-product">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Core Product</span>
          <h2 className="section-title">The Stat AI Engine</h2>
          <p className="section-subtitle">
            A powerful platform that collects, simulates, and analyzes microgrid data with unprecedented accuracy.
          </p>
        </div>
        <div className="product-content">
          <div className="product-info">
            <h3>Intelligent Data Processing</h3>
            <p>
              Our engine transforms raw microgrid data into actionable insights, enabling operators to make informed decisions in real-time.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-check">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a 
              href="https://zenodo.org/records/18311223" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-dataset"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Explore Our Published Dataset
            </a>
          </div>
          <div className="product-visual">
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <span className="dashboard-title">Stat AI Dashboard</span>
                <div className="dashboard-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="data-flow">
                {flowSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flow-step"
                    ref={(el) => (flowStepsRef.current[index] = el)}
                    style={{
                      opacity: 0,
                      transform: 'translateY(30px)',
                      transition: `opacity 0.6s ease, transform 0.6s ease`,
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="flow-icon">{step.icon}</div>
                    <div className="flow-text">
                      <h4>{step.title}</h4>
                      <p>{step.subtitle}</p>
                    </div>
                    {step.showArrow && <span className="flow-arrow">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreProduct;
