const projectList = [
  {
    title: 'Portfolio Website',
    desc: 'My personal portfolio website built with React.js showcasing my skills and projects.',
    link: '#'
  },
  {
    title: 'Sustainable Ecopack-AI',
    desc: 'An AI-powered Sustainable packaging solution that helps businesses choose eco-friendly packaging materials based on prouct type.cost,impact on enviornment build using modern web technologies and artifical intelligence.',
    link: '#'
  },
];

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projectList.map((p, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.desc}>{p.desc}</p>
            <a href={p.link} style={styles.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding:'4rem 2rem', background:'#1e293b', color:'white', textAlign:'center' },
  heading: { color:'#38bdf8', fontSize:'2rem', marginBottom:'2rem' },
  grid: { display:'flex', flexWrap:'wrap', gap:'1.5rem', justifyContent:'center' },
  card: { background:'#0f172a', padding:'1.5rem', borderRadius:'12px', width:'280px', textAlign:'left', border:'1px solid #334155' },
  title: { color:'#38bdf8', margin:'0 0 0.5rem' },
  desc: { color:'#94a3b8', lineHeight:'1.6' },
  link: { color:'#38bdf8', textDecoration:'none', fontWeight:'bold' }
};

export default Projects;