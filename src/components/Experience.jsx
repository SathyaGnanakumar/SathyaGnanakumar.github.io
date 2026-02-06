const Experience = ({ data }) => {
  return (
    <section id="resume" className="experience">
      <div className="container">
        <div className="section-header reveal">
          <h2>{data.title}</h2>
          <div className="section-line" aria-hidden="true"></div>
        </div>
        <div className="timeline">
          {data.items.map((item, index) => (
            <article
              key={`${item.date}-${item.role}`}
              className={`timeline-item reveal ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-card glass">
                <div className="timeline-date">{item.date}</div>
                <h3>{item.role}</h3>
                <div className="company-info">
                  <img src={item.logo} alt={item.logoAlt} className="company-logo" />
                </div>
                <ul className="responsibilities">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={`${item.date}-${bulletIndex}`}>
                      {bullet.map((segment, segmentIndex) =>
                        segment.highlight ? (
                          <span key={segmentIndex} className="highlight">
                            {segment.text}
                          </span>
                        ) : (
                          <span key={segmentIndex}>{segment.text}</span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
