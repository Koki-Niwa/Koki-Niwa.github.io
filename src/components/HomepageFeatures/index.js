import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const features = [
  {
    title: '前端开发',
    desc: 'HTML、CSS、JavaScript、React、Vue、TypeScript、工程化等前端技术的系统学习笔记。',
    link: '/docs/frontend/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: '后端开发',
    desc: 'Node.js、Python、数据库、API 设计、微服务架构等后端技术的实践与总结。',
    link: '/docs/backend/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
  {
    title: '工具与效率',
    desc: 'VS Code、Git、Docker、终端配置、AI 辅助编程等提升开发效率的工具和技巧。',
    link: '/docs/tools/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
];

function Feature({ title, desc, link, icon }) {
  return (
    <div className="col col--4">
      <Link to={link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
        <div className="feature-card">
          <div className="feature-card__icon">{icon}</div>
          <Heading as="h3" className="feature-card__title">
            {title}
          </Heading>
          <p className="feature-card__desc">{desc}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
