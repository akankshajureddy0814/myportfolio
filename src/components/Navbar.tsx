import { useState, useEffect } from 'react';

const links = ['about', 'skills', 'experience', 'education', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 100) {
          setActive(el.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 4rem',
      background: 'rgba(10,14,26,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <a href="#" style={{
        fontFamily: 'Syne, sans-serif', fontWeight: 800,
        fontSize: '1.2rem', color: '#00d4ff', textDecoration: 'none',
      }}>AJ</a>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.78rem',
              color: active === link ? '#00d4ff' : '#64748b',
              textDecoration: 'none', letterSpacing: '0.05em',
              textTransform: 'uppercase', transition: 'color 0.2s',
            }}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}