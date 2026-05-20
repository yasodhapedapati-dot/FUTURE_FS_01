function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I am a passionate Full Stack Web Developer currently interning at Future Interns.
        I love building web applications and solving real-world problems through code.
        I am currently learning React, Node.js, and modern web development practices.
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