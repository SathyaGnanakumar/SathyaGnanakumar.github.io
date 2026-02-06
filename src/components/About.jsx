const About = ({ data }) => {
  const name = 'Sathya Gnanakumar';
  const firstParagraph = data.paragraphs[0];
  const nameParts = firstParagraph.split(name);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header reveal">
          <h2>{data.title}</h2>
          <div className="section-line" aria-hidden="true"></div>
        </div>
        <div className="about-grid">
          <div className="about-image reveal">
            <img src={data.image} alt={data.imageAlt} />
          </div>
          <div className="about-card reveal">
            <p>
              {nameParts[0]}
              <span className="bio-highlight">{name}</span>
              {nameParts[1]}
            </p>
            {data.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="skills">
              {data.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
