import { useEffect, useRef } from 'react';

const About = () => {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      ),
      iconClass: 'purple',
      title: 'Our Mission',
      description: 'To democratize access to intelligent energy management, making sustainable power solutions available to communities everywhere through advanced AI technology.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      iconClass: 'teal',
      title: 'Our Vision',
      description: 'A world where every microgrid operates at peak efficiency, where anomalies are predicted before they occur, and where clean energy is the global standard.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      iconClass: 'purple',
      title: 'Our Approach',
      description: 'We leverage machine learning, synthetic data generation, and real-time analytics to create comprehensive solutions that adapt and evolve with your energy needs.',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Pioneering the Future of Energy</h2>
          <p className="section-subtitle">
            We combine cutting-edge AI with deep energy expertise to transform how microgrids operate worldwide.
          </p>
        </div>
        <div className="about-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="about-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className={`about-icon ${card.iconClass}`}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
