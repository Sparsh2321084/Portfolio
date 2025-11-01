import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../data/portfolioData';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'pcb', label: 'PCBs' },
    { value: 'schematic', label: 'Schematics' },
    { value: 'debug', label: 'Debug Tools' },
    { value: 'assembly', label: 'Assembly' },
    { value: 'cad', label: 'CAD/3D' }
  ];

  const filteredGallery = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle">
            PCBs, schematics, debug traces, and field deployments
          </p>
        </motion.div>

        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-image-placeholder">
                <span className="gallery-icon">
                  {item.category === 'pcb' && '🔌'}
                  {item.category === 'schematic' && '📐'}
                  {item.category === 'debug' && '📊'}
                  {item.category === 'assembly' && '🔧'}
                  {item.category === 'cad' && '🖨️'}
                </span>
                <p className="image-label">{item.category.toUpperCase()}</p>
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
              <div className="lightbox-image-placeholder">
                <span className="lightbox-icon">
                  {selectedImage.category === 'pcb' && '🔌'}
                  {selectedImage.category === 'schematic' && '📐'}
                  {selectedImage.category === 'debug' && '📊'}
                  {selectedImage.category === 'assembly' && '🔧'}
                  {selectedImage.category === 'cad' && '🖨️'}
                </span>
                <p className="image-note">Image: {selectedImage.title}</p>
              </div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
