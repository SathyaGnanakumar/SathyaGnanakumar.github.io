import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content glass">
        <div className="modal-header">
          <h2>{project.title}</h2>
          <button className="close-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          {project.description ? (
            <p className="modal-description">{project.description}</p>
          ) : null}
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span className="modal-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {project.highlights?.length ? (
            <div className="modal-highlights">
              <h3>Key Achievements</h3>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="modal-actions">
            <a
              className="btn btn-primary"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText || 'View Project'}
            </a>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
