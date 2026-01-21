import { useEffect, useRef } from 'react';

const AIIntegration = () => {
  const featuresRef = useRef([]);

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

    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <circle cx="12" cy="5" r="1"/>
          <circle cx="7" cy="12" r="1"/>
          <circle cx="17" cy="12" r="1"/>
        </svg>
      ),
      title: 'Anomaly Prediction',
      description: 'Neural networks trained on synthetic and real data detect anomalies before they impact operations, enabling proactive maintenance.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <polyline points="6 8 10 12 6 16"/>
          <line x1="14" y1="10" x2="18" y2="10"/>
          <line x1="14" y1="14" x2="18" y2="14"/>
        </svg>
      ),
      title: 'Scenario Simulation',
      description: 'Test thousands of what-if scenarios in minutes, understanding how your grid responds to various conditions and edge cases.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          <path d="M6 8h2"/>
          <path d="M6 12h2"/>
          <path d="M16 8h2"/>
          <path d="M16 12h2"/>
        </svg>
      ),
      title: 'Smart Decision Support',
      description: 'AI-powered recommendations help operators make faster, more informed decisions based on comprehensive data analysis.',
    },
  ];

  return (
    <section id="ai-integration" className="ai-integration">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">AI Integration</span>
          <h2 className="section-title">Intelligence at Every Level</h2>
          <p className="section-subtitle">
            Our AI doesn't just analyze—it predicts, simulates, and continuously improves decision-making.
          </p>
        </div>
        <div className="ai-features">
          {features.map((feature, index) => (
            <div
              key={index}
              className="ai-feature"
              ref={(el) => (featuresRef.current[index] = el)}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="ai-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;
