import { useEffect, useRef } from 'react';

const Impact = () => {
  const statsRef = useRef([]);
  const benefitsRef = useRef([]);

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

    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat);
    });
    benefitsRef.current.forEach((benefit) => {
      if (benefit) observer.observe(benefit);
    });

    return () => observer.disconnect();
  }, []);

  const showComingSoon = true;

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Enhanced Reliability',
      description: 'Minimize downtime with predictive maintenance and early warning systems.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: 'Maximum Efficiency',
      description: 'Optimize energy distribution and reduce waste through intelligent load balancing.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Cost Savings',
      description: 'Reduce operational costs through automated optimization and fewer emergency repairs.',
    },
  ];

  return (
    <section id="impact" className="impact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Impact & Value</span>
          <h2 className="section-title">Measurable Results</h2>
          <p className="section-subtitle">
            Our technology delivers tangible benefits that transform microgrid operations.
          </p>
        </div>
        <div className="impact-stats coming-soon-container">
          <div className="coming-soon-message">
            <h3>Benchmark Testing in Progress</h3>
            <p>Our metrics are currently being validated through rigorous testing. Check back soon for verified results!</p>
          </div>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card"
              ref={(el) => (benefitsRef.current[index] = el)}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
