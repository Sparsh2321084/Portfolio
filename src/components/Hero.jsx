import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Sparsh2321084', label: 'GitHub' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaTelegram />, url: '#', label: 'Telegram' }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="status-indicator"></span>
            Available for Opportunities
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="gradient-text">Sparsh</span>
          </motion.h1>

          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Embedded Systems Engineer & IoT Builder
          </motion.h2>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm a builder at heart and a systems thinker by design. I specialize in 
            <span className="highlight"> modular, field-ready IoT and robotics systems</span> using 
            <span className="highlight"> ESP32, STM32, and Raspberry Pi</span>. My work fuses 
            real-time sensing, embedded control, and clean code architecture—always with a focus on 
            <span className="highlight"> clarity, maintainability, and field performance</span>.
          </motion.p>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            I thrive on rapid prototyping, sensor integration, and scalable alert systems. 
            Whether it's designing PCBs, optimizing power budgets, or debugging with a logic analyzer, 
            <span className="highlight"> I build with purpose and precision</span>.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/resume.pdf" download className="btn btn-secondary">
              <FaFileDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="profile-photo-container">
            {/* ADD YOUR PHOTO HERE: Save as /public/profile.jpg */}
            <div className="profile-photo">
              <img 
                src="/profile.jpg" 
                alt="Sparsh - Embedded Systems Engineer"
                onError={(e) => {
                  // Fallback if image not found - shows initials
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">
                <span>S</span>
              </div>
            </div>
            <div className="profile-decoration">
              <div className="decoration-circle circle-1"></div>
              <div className="decoration-circle circle-2"></div>
              <div className="decoration-circle circle-3"></div>
            </div>
            <div className="floating-chip chip-1">ESP32</div>
            <div className="floating-chip chip-2">STM32</div>
            <div className="floating-chip chip-3">RPi</div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
