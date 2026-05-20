const skillsList = [
  'c', 'python(familiar)', 'Java',
  'Git & GitHub', 'MySQL','Cloud computing','Generative AI',
  'Machine learning','problem solving'
];

function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.grid}>
        {skillsList.map((skill, i) => (
          <div key={i} style={styles.card}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding:'4rem 2rem', background:'#0f172a', color:'white', textAlign:'center' },
  heading: { color:'#38bdf8', fontSize:'2rem', marginBottom:'2rem' },
  grid: { display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', maxWidth:'800px', margin:'0 auto' },
  card: { background:'#1e293b', color:'#38bdf8', padding:'1rem 2rem', borderRadius:'8px', fontSize:'1.1rem', border:'1px solid #38bdf8' }
};

export default Skills;