// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import img1 from "../images/chalet.jpeg";
// import img2 from "../images/gym.jpeg";
// import img0 from "../images/port.png";
// import img3 from "../images/transaction.jpeg";
// import img4 from "../images/notiapp.jpeg";
// import img5 from "../images/cofeeapp.jpeg";

// const Projects = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const projects = [
//     {
//       title: "Chalet Reservation Website",
//       description: "A website where users can book chalets in any city in Lebanon.",
//       image: img1,
//       tech: ["HTML5", "CSS3", "PHP", "JavaScript"]
//     },
//     {
//       title: "Gym Booking Website",
//       description: "Allows clients to book gym sessions, choose a coach, and purchase fitness products.",
//       image: img2,
//       tech: ["React", "Node.js", "MongoDB", "Express"]
//     },
//     {
//       title: "Finance Website (Monty Mobile)",
//       description: "A finance tracking platform with AI analysis to predict transaction success and future outcomes.",
//       image: img3,
//       tech: ["React", "AI API", "SQL", "Sequelize"]
//     },
//     {
//       title: "3D Portfolio",
//       description: "Interactive 3D portfolio website using Three.js and React.",
//       image: img0,
//       tech: ["React", "Three.js", "Framer Motion"]
//     },
//     {
//       title: "Private Notification App",
//       description: "A mobile app where the admin can send notifications/messages to all followers.",
//       image: img4,
//       tech: ["Flutter", "Firebase", "Push Notifications", "Vercel"]
//     },
//     {
//       title: "Café Ordering App",
//       description: "A mobile app for a café where customers can order, reserve, and check prices.",
//       image: img5,
//       tech: ["Flutter", "Firebase", "Google Maps API"]
//     },
//     {
//     title: "Restaurant Mobile App (Freelance Project) — 2025",
//     description: 
//       "Developed a mobile application for a student-owned restaurant, featuring a fully offline menu based on local JSON data. " + 
//       "Users can browse meals, add them to cart, and pay securely via integrated Stripe payments.",
//     tech: ["Flutter", "Dart", "Stripe API"]
//   },
//   {
//     title: "ChronoTrack HR Attendance System (Frontend Only – Freelance Project) — 2025",
//     description: 
//       "Built a web interface for an employee attendance and HR tracking system. " +
//       "Employees can check in/out daily, while HR managers monitor presence, absence, and calculate salaries using real-time data.",
//     tech: ["React.js", "HTML", "CSS", "JavaScript"]
//   }
//   ];

//   return (
//     <>
//       <motion.section 
//         className="section projects-section"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <h2>Projects</h2>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <motion.div 
//               key={index}
//               className="project-card"
//               initial={{ opacity: 0, rotateY: 180 }}
//               whileInView={{ opacity: 1, rotateY: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="project-image" onClick={() => setSelectedImage(project.image)}>
//                 <img src={project.image} alt={project.title} />
//                 <div className="image-overlay">
//                   <span>Click to enlarge</span>
//                 </div>
//               </div>
//               <div className="project-info">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <div className="project-tech">
//                   {project.tech.map((tech, i) => (
//                     <span key={i} className="tech-tag">{tech}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Modal pour afficher l'image en grand */}
//       <AnimatePresence>
//         {selectedImage && (
//           <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.75 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.75 }}
//               transition={{ duration: 0.3 }}
//               className="modal-content"
//               onClick={e => e.stopPropagation()}
//             >
//               <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
//               <img src={selectedImage} alt="Project in full view" />
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../images/chalet.jpeg";
import img2 from "../images/gym.jpeg";
import img0 from "../images/port.png";
import img3 from "../images/transaction.jpeg";
import img4 from "../images/notiapp.jpeg";
import img5 from "../images/cofeeapp.jpeg";

// SVG Placeholder
const placeholderSVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e2e8f0"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial, sans-serif" font-size="20" fill="#4a5568">
        No Image Available
      </text>
    </svg>
  `);

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Chalet Reservation Website",
      description: "A website where users can book chalets in any city in Lebanon.",
      image: img1,
      tech: ["HTML5", "CSS3", "PHP", "JavaScript"]
    },
    {
      title: "Gym Booking Website",
      description: "Allows clients to book gym sessions, choose a coach, and purchase fitness products.",
      image: img2,
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Finance Website (Monty Mobile)",
      description: "A finance tracking platform with AI analysis to predict transaction success and future outcomes.",
      image: img3,
      tech: ["React", "AI API", "SQL", "Sequelize"]
    },
    {
      title: "3D Portfolio",
      description: "Interactive 3D portfolio website using Three.js and React.",
      image: img0,
      tech: ["React", "Three.js", "Framer Motion"]
    },
    {
      title: "Private Notification App",
      description: "A mobile app where the admin can send notifications/messages to all followers.",
      image: img4,
      tech: ["Flutter", "Firebase", "Push Notifications", "Vercel"]
    },
    {
      title: "Café Ordering App",
      description: "A mobile app for a café where customers can order, reserve, and check prices.",
      image: img5,
      tech: ["Flutter", "Firebase", "Google Maps API"]
    },
    {
      title: "Restaurant Mobile App (Freelance Project) — 2025",
      description: 
        "Developed a mobile application for a student-owned restaurant, featuring a fully offline menu based on local JSON data. " + 
        "Users can browse meals, add them to cart, and pay securely via integrated Stripe payments.",
      image: null,
      tech: ["Flutter", "Dart", "Stripe API"]
    },
    {
      title: "ChronoTrack HR Attendance System (Frontend Only – Freelance Project) — 2025",
      description: 
        "Built a web interface for an employee attendance and HR tracking system. " +
        "Employees can check in/out daily, while HR managers monitor presence, absence, and calculate salaries using real-time data.",
      image: undefined,
      tech: ["React.js", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <>
      <motion.section 
        className="section projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const imgSrc = project.image ? project.image : placeholderSVG;

            return (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="project-image" onClick={() => setSelectedImage(imgSrc)}>
                  <img src={imgSrc} alt={project.title} />
                  <div className="image-overlay">
                    <span>Click to enlarge</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Modal لعرض الصورة بالحجم الكبير */}
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
              <img src={selectedImage} alt="Project in full view" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
