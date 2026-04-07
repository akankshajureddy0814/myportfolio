import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 4rem', background: '#0a0e1a' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>// where i've worked</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: '3rem', lineHeight: 1.1 }}>
        Work <span style={{ color: '#00d4ff' }}>Experience</span>
      </h2>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)', opacity: 0.3 }} />
        {experiences.map((exp, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ paddingLeft: '3rem', marginBottom: '4rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: -4, top: 6, width: 9, height: 9, borderRadius: '50%', background: '#00d4ff', boxShadow: '0 0 10px #00d4ff' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e2e8f0' }}>{exp.role}</div>
              <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', padding: '0.25rem 0.8rem', borderRadius: 100 }}>{exp.date}</div>
            </div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#64748b', marginBottom: '1.2rem' }}>📍 {exp.client}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {exp.points.map((point, j) => (
                <li key={j} style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7, paddingLeft: '1.2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#00d4ff', fontSize: '0.7rem', top: '0.3rem' }}>▸</span>
                  <span dangerouslySetInnerHTML={{ __html: point }} />
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.2rem' }}>
              {exp.tags.map((tag) => (
                <span key={tag} style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', color: '#a78bfa', fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', padding: '0.2rem 0.55rem', borderRadius: 4 }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}