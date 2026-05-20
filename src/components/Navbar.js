function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyPortfolio</h2>
      <ul style={styles.links}>
        <li><a href="#about" style={styles.a}>About</a></li>
        <li><a href="#skills" style={styles.a}>Skills</a></li>
        <li><a href="#projects" style={styles.a}>Projects</a></li>
        <li><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1rem 2rem', background:'#0f172a', color:'white', position:'sticky', top:0, zIndex:100 },
  logo: { color:'#38bdf8', margin:0 },
  links: { display:'flex', gap:'1.5rem', listStyle:'none', margin:0, padding:0 },
  a: { color:'white', textDecoration:'none', fontSize:'1rem' }
};

export default Navbar;