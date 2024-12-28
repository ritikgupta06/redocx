// about.js
import styles from "../styles/about.module.css";

const About = () => {
  const technologies = [
    "JavaScript",
    "Next.js",
    "React.js",
    "React Native",
    "Git & GitHub",
    "AWS",
  ];

  // Duplicate technologies to create an infinite scroll effect
  const infiniteTechnologies = [...technologies, ...technologies];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <p className={styles.description}>
        Redocx is a comprehensive documentation platform offering the latest
        commands for installation, building, running, and scripting across
        various technologies, including React, Redux, React Native, and
        JavaScript. It streamlines development by providing all essential
        scripts and guides in one place, making it an invaluable resource for
        developers.
      </p>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {infiniteTechnologies.map((tech, index) => (
            <div key={index} className={styles.card}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
