const Hero = ({ data }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-image-wrap reveal">
          <div className="hero-glow" aria-hidden="true"></div>
          <img src={data.image} alt={data.imageAlt} className="hero-image" />
        </div>
        <div className="hero-copy reveal">
          <h1>{data.heading}</h1>
          <p className="hero-subtitle">{data.subheading}</p>
          <a href="#about" className="btn btn-primary">
            {data.cta}
          </a>
        </div>
      </div>
      <div className="hero-grid-overlay" aria-hidden="true"></div>
    </section>
  );
};

export default Hero;
