function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
       Aspiring Software Engineer passionate about building innovative and user-friendly applications.
        I enjoy learning new technologies, solving real-world problems, and creating projects that combine creativity with functionality.
         Skilled in web development, AI-based projects, and continuously improving my programming knowledge.
          Currently exploring Full Stack Development and software engineering while gaining practical experience through internships and hands-on projects.
           Dedicated to writing clean, efficient code and growing as a developer every day.
      </p>
    </section>
  );
}

const styles = {
  section: { padding:'4rem 2rem', background:'#1e293b', color:'white', textAlign:'center' },
  heading: { color:'#38bdf8', fontSize:'2rem', marginBottom:'1rem' },
  text: { maxWidth:'600px', margin:'0 auto', color:'#cbd5e1', lineHeight:'1.8', fontSize:'1.1rem' }
};

export default About;