import { motion } from 'framer-motion';

const points = [
  { icon: '⚡', title: 'Full Stack Expertise', desc: 'Expert in Java, Spring Boot, Spring MVC, Spring Security, and Spring Cloud, building robust backend services with RESTful and GraphQL APIs, OAuth2.0/JWT, and event-driven microservices via Apache Kafka and RabbitMQ.' },
  { icon: '🎨', title: 'Frontend Development', desc: 'Proficient in React.js, Angular, TypeScript, Redux Toolkit, React Hooks, and Material-UI, delivering dynamic, responsive, and component-driven user interfaces integrated seamlessly with backend APIs.' },
  { icon: '☁️', title: 'Multi-Cloud', desc: 'Experienced on AWS (EKS, Lambda, EC2, ECS, API Gateway), Azure (AKS, DevOps, Service Bus, Monitor, App Insights), and GCP (GKE, Cloud Run, Pub/Sub, Stackdriver) with Docker and Kubernetes.' },
  { icon: '🏛️', title: 'Legacy Modernization', desc: 'Hands-on bridging on-premises enterprise apps (WebSphere, JBoss, Oracle) with cloud-native microservices, including refactoring SOAP services into RESTful microservices.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'Implemented OAuth2.0, JWT, Spring Security with RBAC, ensuring HIPAA and PCI-DSS compliance across healthcare and financial platforms with AWS IAM for cloud access control.' },
  { icon: '🔁', title: 'CI/CD & DevOps', desc: 'Building pipelines with Jenkins, GitHub Actions, Azure DevOps, and GitLab CI/CD with comprehensive testing via JUnit, Mockito, Cypress, Jest, and React Testing Library.' },
];

const highlights = [
  { num: '7+', title: 'Years of Experience', desc: 'Enterprise Java Full Stack development' },
  { num: '3',  title: 'Cloud Platforms',     desc: 'AWS, Azure & GCP certified workflows' },
  { num: '3',  title: 'Industry Domains',    desc: 'Financial, Healthcare & Government' },
  { num: '50+',title: 'Technologies',        desc: 'Across full stack, cloud, security & DevOps' },
  { num: '95%',title: 'SLA Compliance',      desc: 'Production issue resolution rate' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 4rem', background: '#0a0e1a' }}>
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>// who i am</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>
          Professional <span style={{ color: '#00d4ff' }}>Summary</span>
        </h2>
        <a href="/myportfolio/az900.pdf" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.2)', borderRadius: 10, padding: '0.6rem 1rem', textDecoration: 'none' }}>
          <img src="https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png" style={{ width: 36, height: 36, borderRadius: '50%' }} alt="AZ-900" />
          <div>
            <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Microsoft Certified</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0' }}>AZ-900 Azure Fundamentals</div>
          </div>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#00d4ff' }}>↗</span>
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {points.map((p) => (
            <div key={p.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0 }}>{p.icon}</div>
              <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.7 }}>
                <strong style={{ color: '#e2e8f0' }}>{p.title}</strong> — {p.desc}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {highlights.map((h) => (
            <div key={h.title} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10, padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#00d4ff', lineHeight: 1, minWidth: 60 }}>{h.num}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                <strong style={{ color: '#e2e8f0', display: 'block', fontSize: '0.88rem', marginBottom: '0.1rem' }}>{h.title}</strong>
                {h.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}