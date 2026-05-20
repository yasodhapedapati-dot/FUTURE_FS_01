function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.name}>Hi, I'm <span style={styles.highlight}>Yasodha pedapati</span></h1>
      <h2 style={styles.title}>Aspiring software engineer</h2>
      <p style={styles.bio}>I build efficient,Scalable,and user-focused software solutions. Currently interning at Future Interns.</p>
      <a href="#contact" style={styles.btn}>Hire Me</a>
    </section>
  );
}

const styles = {
  hero: { minHeight:'90vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'#0f172a', color:'white', textAlign:'center', padding:'2rem' },
  name: { fontSize:'3rem', margin:0 },
  highlight: { color:'#38bdf8' },
  title: { color:'#94a3b8', margin:'0.5rem 0', fontSize:'1.5rem' },
  bio: { maxWidth:'500px', color:'#cbd5e1', lineHeight:'1.8' },
  btn: { marginTop:'1rem', padding:'0.75rem 2rem', background:'#38bdf8', color:'#0f172a', borderRadius:'8px', textDecoration:'none', fontWeight:'bold', fontSize:'1rem' }
};

export default Hero;