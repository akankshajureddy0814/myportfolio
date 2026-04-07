import { motion } from 'framer-motion';

const contactItems = [
  { icon: '📧', label: 'Email', value: 'akankshajureddy0814@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=akankshajureddy0814@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/akanksha-j0001', href: 'https://www.linkedin.com/in/akanksha-j0001/' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/akankshajureddy0814', href: 'https://github.com/akankshajureddy0814' },
  { icon: '📍', label: 'Location', value: 'Lawrence Township, NJ', href: null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 4rem', background: '#111827' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>// get in touch</div>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, marginBottom: '3rem', lineHeight: 1.1 }}>
        Contact <span style={{ color: '#00d4ff' }}>Me</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.8 }}>Open to full-time roles, contract positions, and consulting opportunities in Java Full Stack development.</p>
          {contactItems.map((item) => (
            <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</div>
                {item.href
                  ? <a href={item.href} target="_blank" rel="noreferrer" style={{ color: '#00d4ff', fontSize: '0.9rem', textDecoration: 'none' }}>{item.value}</a>
                  : <div style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{item.value}</div>
                }
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          style={{ background: '#0a0e1a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12, padding: '2rem' }}>
          <form action="https://formspree.io/f/xreanezq" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Name</label>
              <input type="text" name="name" required placeholder="Your name" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.8rem 1rem', color: '#e2e8f0', fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
              <input type="email" name="email" required placeholder="your@email.com" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.8rem 1rem', color: '#e2e8f0', fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
              <textarea name="message" required placeholder="Tell me about the opportunity..." style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 8, padding: '0.8rem 1rem', color: '#e2e8f0', fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', outline: 'none', minHeight: 140, resize: 'vertical' }} />
            </div>
            <button type="submit" style={{ background: '#00d4ff', color: '#0a0e1a', border: 'none', padding: '0.9rem 2rem', borderRadius: 6, fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer', alignSelf: 'flex-start', boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}>
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}