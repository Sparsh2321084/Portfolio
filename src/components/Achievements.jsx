import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import { achievementsData } from '../data/portfolioData';
import './Achievements.css';

const Achievements = () => {
  const getCategoryIcon = (category) => {
    const icons = {
      hackathon: <FaTrophy />,
      certification: <FaCertificate />,
      award: <FaMedal />,
      competition: <FaAward />
    };
    return icons[category] || <FaAward />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      hackathon: '#f59e0b',
      certification: '#3b82f6',
      award: '#8b5cf6',
      competition: '#10b981'
    };
    return colors[category] || '#667eea';
  };

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements & Recognition</h2>
          <p className="section-subtitle">
            Certifications, hackathons, and awards that validate my expertise
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#f59e0b' }}>
              <FaTrophy />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">
                {achievementsData.filter(a => a.category === 'hackathon').length}
              </h3>
              <p className="stat-label">Hackathons</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#3b82f6' }}>
              <FaCertificate />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">
                {achievementsData.filter(a => a.category === 'certification').length}
              </h3>
              <p className="stat-label">Certifications</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#8b5cf6' }}>
              <FaMedal />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">
                {achievementsData.filter(a => a.category === 'award').length}
              </h3>
              <p className="stat-label">Awards</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ color: '#10b981' }}>
              <FaAward />
            </div>
            <div className="stat-content">
              <h3 className="stat-number">
                {achievementsData.filter(a => a.category === 'competition').length}
              </h3>
              <p className="stat-label">Competitions</p>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div 
                className="achievement-icon-bg"
                style={{ 
                  backgroundColor: `${getCategoryColor(achievement.category)}20`,
                  borderColor: getCategoryColor(achievement.category)
                }}
              >
                <div 
                  className="achievement-icon"
                  style={{ color: getCategoryColor(achievement.category) }}
                >
                  {getCategoryIcon(achievement.category)}
                </div>
              </div>

              <div className="achievement-content">
                <span 
                  className="achievement-category"
                  style={{ color: getCategoryColor(achievement.category) }}
                >
                  {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                </span>
                
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-issuer">{achievement.issuer}</p>
                
                {achievement.description && (
                  <p className="achievement-description">{achievement.description}</p>
                )}

                <div className="achievement-footer">
                  <div className="achievement-date">
                    <FaCalendar />
                    <span>{achievement.date}</span>
                  </div>
                  
                  {achievement.link && (
                    <a 
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      View <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                {achievement.skills && (
                  <div className="achievement-skills">
                    {achievement.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
