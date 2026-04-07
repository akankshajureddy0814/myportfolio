import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 4rem', background: '#111827' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>// what i work with</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: '3rem', lineHeight: 1.1 }}>
        Technical <span style={{ color: '#00d4ff' }}>Skills</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {skills.map((skill, i) => (
          <motion.div key={skill.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{ background: '#0a0e1a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '1.8rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.icon}</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', color: '#e2e8f0' }}>{skill.title}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {skill.tags.map((tag) => (
                <span key={tag} style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.12)', color: '#64748b', fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', padding: '0.25rem 0.6rem', borderRadius: 4 }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}