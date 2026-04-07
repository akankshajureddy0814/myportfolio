export default function Footer() {
    return (
      <footer style={{ background: '#0a0e1a', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#64748b' }}>
          © 2025 Akanksha Jureddy · Java Full Stack Developer
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['about', 'skills', 'experience', 'contact'].map((link) => (
            <a key={link} href={`#${link}`} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#64748b', textDecoration: 'none', textTransform: 'capitalize' }}>{link}</a>
          ))}
        </div>
      </footer>
    );
  }