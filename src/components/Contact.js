function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.sub}>Feel free to reach out for any opportunities!</p>
      <form action="https://formspree.io/f/maqkqazb" method="POST" style={styles.form}>
        <input
          name="name"
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={styles.input}
        ></textarea>
        <button type="submit" style={styles.btn}>Send Message</button>
      </form>
    </section>
  );
}

const styles = {
  section: { padding:'4rem 2rem', background:'#0f172a', color:'white', textAlign:'center' },
  heading: { color:'#38bdf8', fontSize:'2rem', marginBottom:'0.5rem' },
  sub: { color:'#94a3b8', marginBottom:'2rem' },
  form: { display:'flex', flexDirection:'column', gap:'1rem', maxWidth:'500px', margin:'0 auto' },
  input: { padding:'0.75rem', borderRadius:'8px', border:'1px solid #334155', background:'#1e293b', color:'white', fontSize:'1rem' },
  btn: { padding:'0.75rem', background:'#38bdf8', color:'#0f172a', border:'none', borderRadius:'8px', fontSize:'1rem', fontWeight:'bold', cursor:'pointer' }
};

export default Contact;