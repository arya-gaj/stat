import { useEffect, useRef } from 'react';

const ProblemStatement = () => {
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

  const problems = [
    {
      number: '01',
      title: 'Scarce Realistic Data',
      description: "There's a severe shortage of high-quality, realistic microgrid datasets needed to train effective AI models for energy optimization.",
    },
    {
      number: '02',
      title: 'Voltage Fluctuation Blindspots',
      description: 'Existing tools fail to accurately capture and predict voltage fluctuations, leading to equipment damage and power quality issues.',
    },
    {
      number: '03',
      title: 'Undetected Anomalies',
      description: 'Critical anomalies go unnoticed until they cause failures, resulting in costly downtime and safety hazards.',
    },
    {
      number: '04',
      title: 'User Behavior Gaps',
      description: 'Current models ignore the complex patterns of user behavior that significantly impact grid performance and energy consumption.',
    },
  ];

  return (
    <section id="problem" className="problem-statement">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">The Challenge</span>
          <h2 className="section-title">Why Current Solutions Fall Short</h2>
          <p className="section-subtitle">
            The energy industry faces critical data challenges that traditional approaches cannot solve.
          </p>
        </div>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="problem-number">{problem.number}</div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
