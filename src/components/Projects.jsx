import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ data }) => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = activeProjectId
    ? data.modalData[activeProjectId]
    : null;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header reveal">
          <h2>{data.title}</h2>
          <div className="section-line" aria-hidden="true"></div>
        </div>
        <div className="projects-grid">
          {data.cards.map((card, index) => (
            <article
              key={card.id}
              className="project-card reveal"
              style={{ animationDelay: `${index * 80}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${card.title} details`}
              onClick={() => setActiveProjectId(card.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setActiveProjectId(card.id);
                }
              }}
            >
              <div className="project-image">
                <img src={card.image} alt={card.imageAlt} />
              </div>
              <div className="project-body">
                <h3>{card.title}</h3>
                <p>{card.summary}</p>
                <div className="project-tags">
                  {card.tags.map((tag) => (
                    <span className="tag" key={`${card.id}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject ? (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProjectId(null)}
        />
      ) : null}
    </section>
  );
};

export default Projects;
