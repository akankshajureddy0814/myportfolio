import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '8rem 4rem 4rem', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px', pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: '20%', right: '10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', maxWidth: 1200, width: '100%', position: 'relative', zIndex: 1 }}>
        <motion.div style={{ flex: 1 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
            color: '#00d4ff', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem',
            padding: '0.4rem 1rem', borderRadius: 100, marginBottom: '2rem',
          }}>
            <span style={{ fontSize: '0.6rem' }}>●</span> Open for new opportunities
          </div>

          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: -2, marginBottom: '1.5rem' }}>
            Akanksha Jureddy<br /><span style={{ color: '#00d4ff' }}>Full Stack</span><br />Developer
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: 580, marginBottom: '3rem', lineHeight: 1.8 }}>
            7+ years building scalable enterprise applications across financial, healthcare, and government sectors. Java · Spring Boot · React · Cloud.
          </p>

          <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[['7+', 'Years Experience'], ['5', 'Companies'], ['3', 'Cloud Platforms'], ['3', 'Domains']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.2rem', fontWeight: 800, color: '#00d4ff', lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.3rem' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experience" style={{ background: '#00d4ff', color: '#0a0e1a', padding: '0.8rem 2rem', borderRadius: 6, fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}>View Experience</a>
            <a href="#contact" style={{ background: 'transparent', color: '#e2e8f0', padding: '0.8rem 2rem', borderRadius: 6, border: '1px solid rgba(255,255,255,0.07)', fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', textDecoration: 'none' }}>Get In Touch</a>
          </div>
        </motion.div>

        <motion.div style={{ flexShrink: 0 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div style={{ width: 380, height: 480, borderRadius: 24, border: '3px solid #00d4ff', boxShadow: '0 0 40px rgba(0,212,255,0.2)', overflow: 'hidden' }}>
            <img src="/myportfolio/image.jpeg" alt="Akanksha Jureddy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 75%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}