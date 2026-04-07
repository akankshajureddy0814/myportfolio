import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 4rem', background: '#111827' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>// academic background</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: '3rem', lineHeight: 1.1 }}>Education</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {education.map((edu, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ background: '#0a0e1a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '2rem' }}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{edu.degree}</div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#00d4ff' }}>{edu.school}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}