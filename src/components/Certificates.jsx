import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cert2 from "../images/ESA.png";
import cert1 from "../images/ESIEE.png";
import ctf from "../images/ctf.jpg";
import cert3 from "../images/prompteng.png";
import cert4 from "../images/flutter.png";
import cert5 from "../images/EmpSkills.png";
import cert6 from "../images/ml.png";
import cert7 from "../images/opss.png";
import cert8 from "../images/timemang.png";
import cert9 from "../images/cyberday.jpg";
const Certificates = () => {
  // État pour suivre quelle image est affichée dans le modal
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Full Stack Web Developer",
      issuer: "ESIEE [IT], Paris, France",
      year: "2024-2025",
      image: cert1
    },
    {
      title: "Full Stack Web Development",
      issuer: "ESA Coding Lab",
      year: "2024-2025",
      image: cert2
    },
    {
      title: "Cyber Security",
      issuer: "SemiColom Academy",
      year: "2025",
      image: ctf
    },
    // SE Factory certificate training 1
    {
      title: "Prompt Engineering",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert3
    },
    {
      title: "Flutter Course",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert4
    },
    {
      title: "Employability Skills",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert5
    },
    // SE Factory certificate training 2
    {
      title: "Machine Learning",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert6
    },
    {
      title: "DevOps,MLOps,DataOps",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert7
    },
    {
      title: "Time Management",
      issuer: "SE Factory",
      year: "2024-2025",
      image: cert8
    },
   {
  title: "Participation in Cyber Security Day 2025",
  issuer: "SemiColon Academy",
  year: "2025",
  image: cert9
}

  ];

  return (
    <>
      <motion.section 
        className="section certificates-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Certificates</h2>
        <div className="content">
          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <motion.div 
                key={index}
                className="certificate-card"
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Image cliquable */}
                <div className="certificate-image" onClick={() => setSelectedImage(certificate.image)}>
                  <img src={certificate.image} alt={certificate.title} />
                  <div className="image-overlay">
                    <span>Cliquez pour agrandir</span>
                  </div>
                </div>
                <div className="certificate-info">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer} | {certificate.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal pour l'image en plein écran */}
      <AnimatePresence>
        {selectedImage && (
          <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.3 }}
              className="modal-content"
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage} alt="Certificat en plein écran" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;


/*// components/Certificates.jsx
import React from 'react';
import { motion } from 'framer-motion';

import cert2 from "../images/ESA.png";
import cert1 from "../images/ESIEE.png";
/*
import cert3 from "../images/cert3.png";
*//*
const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Developer",
      issuer: "ESIEE [IT], Paris, France",
      year: "2024-2025",
      image: cert1
    },
    {
      title: "Full Stack Web Development",
      issuer: "ESA Coding Lab",
      year: "2024-2025",
      image: cert2
    },
    {
      title: "Cyber Security",
      issuer: "SemiColom Academy",
      year: "2025",
      image: "cert3"
    }
  ];
  

  return (
    <motion.section 
      className="section certificates-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2>Certificates</h2>
      <div className="content">
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <motion.div 
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, rotateY: 180 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="certificate-image">
                <img src={certificate.image} alt={certificate.title} />
              </div>
              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer} | {certificate.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;*/