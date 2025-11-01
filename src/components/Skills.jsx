import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const renderSkillBar = (skill, index, delay) => (
    <motion.div
      key={skill.name}
      className="skill-item"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay + index * 0.1 }}
    >
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + index * 0.1 + 0.2, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Tools, technologies, and methodologies I use to build robust embedded systems
          </p>
        </motion.div>

        <div className="skills-grid">
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="category-title">
              <span className="category-icon">⚡</span>
              Hardware Platforms
            </h3>
            <div className="skills-list">
              {skillsData.hardware.map((skill, index) => 
                renderSkillBar(skill, index, 0.2)
              )}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="category-title">
              <span className="category-icon">💻</span>
              Software & Programming
            </h3>
            <div className="skills-list">
              {skillsData.software.map((skill, index) => 
                renderSkillBar(skill, index, 0.3)
              )}
            </div>
          </motion.div>

          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="category-title">
              <span className="category-icon">🔧</span>
              Tools & Equipment
            </h3>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => 
                renderSkillBar(skill, index, 0.4)
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="protocols-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="protocols-title">
            <span className="category-icon">📡</span>
            Communication Protocols
          </h3>
          <div className="protocols-grid">
            {skillsData.protocols.map((protocol, index) => (
              <motion.div
                key={protocol.name}
                className="protocol-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="protocol-name">{protocol.name}</span>
                <div className="protocol-level">
                  <div 
                    className="protocol-fill" 
                    style={{ width: `${protocol.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="section-subtitle-small">Core Competencies</h3>
          <div className="competencies-grid">
            <div className="competency-card">
              <span className="competency-icon">🎯</span>
              <h4>Rapid Prototyping</h4>
              <p>Fast iteration from concept to working prototype</p>
            </div>
            <div className="competency-card">
              <span className="competency-icon">🔍</span>
              <h4>Debug & Analysis</h4>
              <p>Logic analyzer, oscilloscope, power profiling</p>
            </div>
            <div className="competency-card">
              <span className="competency-icon">📐</span>
              <h4>System Design</h4>
              <p>Modular architecture, scalability, maintainability</p>
            </div>
            <div className="competency-card">
              <span className="competency-icon">🔋</span>
              <h4>Power Optimization</h4>
              <p>Low-power design for battery-operated systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
