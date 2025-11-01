import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();

  const getStatusBadge = (status) => {
    const statusConfig = {
      deployed: { label: 'Deployed', color: '#22c55e' },
      completed: { label: 'Completed', color: '#3b82f6' },
      'in-progress': { label: 'In Progress', color: '#f59e0b' }
    };
    const config = statusConfig[status] || statusConfig.completed;
    return (
      <span className="status-badge" style={{ borderColor: config.color, color: config.color }}>
        {config.label}
      </span>
    );
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Hardware + Software solutions built with precision and purpose
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span className="image-icon">🔧</span>
                  <p>Project Image</p>
                </div>
                {getStatusBadge(project.status)}
                <div className="project-overlay">
                  <button 
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="overlay-button"
                  >
                    View Details <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <div className="tech-stack">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag tech-more">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <div className="project-footer">
                  <button 
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="details-button"
                  >
                    View Details <FaArrowRight />
                  </button>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
