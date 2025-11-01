// ProjectDetail.jsx - Individual project detail page
// Shows comprehensive information about a single project
// TO CUSTOMIZE: Edit the projectsData.js file with your real project information

import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Find the project by ID from the URL
  // TO CUSTOMIZE: Make sure your project IDs in projectsData.js match the URL structure
  const project = projectsData.find(p => p.id === parseInt(projectId));

  // If project not found, show error
  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate('/')}>Back to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Back Navigation */}
      <motion.div 
        className="project-detail-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Portfolio
        </button>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="nav-link-btn">
              <FaGithub /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="nav-link-btn">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </motion.div>

      {/* Hero Section with Main Image */}
      {/* TO CUSTOMIZE: Add your real project image to /public/projects/ folder */}
      <motion.div 
        className="project-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="project-hero-image">
          <div className="image-placeholder">
            <span className="placeholder-icon">🔧</span>
            <p>Replace with your project image</p>
            <small>Path: /public/projects/{project.image}</small>
          </div>
        </div>
      </motion.div>

      {/* Project Header */}
      <motion.div 
        className="project-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-subtitle">{project.subtitle}</p>
        
        {/* Tech Stack Badges */}
        <div className="tech-stack-badges">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Status Badge */}
        <span className={`status-badge-large ${project.status}`}>
          {project.status === 'deployed' && '🚀 Deployed'}
          {project.status === 'completed' && '✅ Completed'}
          {project.status === 'in-progress' && '🔨 In Progress'}
        </span>
      </motion.div>

      {/* Main Content Container */}
      <div className="project-content-grid">
        
        {/* Left Column - Main Content */}
        <div className="project-main-content">
          
          {/* Overview Section */}
          <motion.section 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-heading">📊 Overview</h2>
            <p className="section-text">{project.longDescription}</p>
          </motion.section>

          {/* Problem Statement */}
          <motion.section 
            className="content-section problem-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="section-heading">🎯 Problem Solved</h2>
            <p className="section-text highlight-text">{project.problemSolved}</p>
          </motion.section>

          {/* Key Features */}
          <motion.section 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="section-heading">✨ Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Photo Gallery */}
          {/* TO CUSTOMIZE: Add multiple project photos to /public/projects/ folder */}
          <motion.section 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="section-heading">📸 Gallery</h2>
            <div className="project-gallery">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="gallery-item-placeholder">
                  <span className="gallery-icon">📷</span>
                  <p>Image {num}</p>
                </div>
              ))}
            </div>
            <p className="gallery-note">
              💡 <strong>To add images:</strong> Place photos in <code>/public/projects/</code> folder 
              and update the <code>projectsData.js</code> file
            </p>
          </motion.section>

        </div>

        {/* Right Column - Technical Details */}
        <div className="project-sidebar">
          
          {/* Technical Specifications */}
          <motion.div 
            className="sidebar-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="sidebar-heading">🔧 Technical Specs</h3>
            <div className="specs-list">
              <div className="spec-item">
                <span className="spec-label">Tech Stack:</span>
                <span className="spec-value">{project.techStack.slice(0, 3).join(', ')}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Status:</span>
                <span className="spec-value">{project.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Power Budget */}
          {/* TO CUSTOMIZE: Update with your actual power measurements */}
          <motion.div 
            className="sidebar-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="sidebar-heading">🔋 Power Budget</h3>
            <div className="power-stats">
              <div className="power-stat">
                <span className="power-label">Active Mode</span>
                <span className="power-value">{project.powerBudget.active}</span>
              </div>
              {project.powerBudget.sleep && (
                <div className="power-stat">
                  <span className="power-label">Sleep Mode</span>
                  <span className="power-value">{project.powerBudget.sleep}</span>
                </div>
              )}
              {project.powerBudget.batteryLife && (
                <div className="power-stat">
                  <span className="power-label">Battery Life</span>
                  <span className="power-value">{project.powerBudget.batteryLife}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bill of Materials (BOM) */}
          {/* TO CUSTOMIZE: Update with your actual component list and costs */}
          <motion.div 
            className="sidebar-card bom-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="sidebar-heading">💰 Bill of Materials</h3>
            <div className="bom-table">
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Qty</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {project.bom.map((item, index) => (
                    <tr key={index}>
                      <td>{item.component}</td>
                      <td>{item.quantity}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="total-row">
                    <td colSpan="2"><strong>Total Cost</strong></td>
                    <td>
                      <strong>
                        ${project.bom.reduce((sum, item) => 
                          sum + parseFloat(item.cost.replace('$', '')), 0
                        ).toFixed(2)}
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div 
        className="project-bottom-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="back-button-large" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to All Projects
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
