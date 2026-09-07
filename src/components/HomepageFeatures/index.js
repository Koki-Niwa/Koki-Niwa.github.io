import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const features = [
  {
    title: 'Agent',
    desc: 'AI Agent 架构、工具调用、多 Agent 协作、RAG、推理优化等前沿技术的学习与实践。',
    link: '/docs/agent/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <circle cx="12" cy="5" r="2"></circle>
        <path d="M12 7v4"></path>
        <line x1="8" y1="16" x2="8" y2="16"></line>
        <line x1="16" y1="16" x2="16" y2="16"></line>
      </svg>
    ),
  },
  {
    title: '编译器',
    desc: '从词法分析、语法分析、IR 优化到代码生成，深入理解编译器原理并动手实现。',
    link: '/docs/compiler/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: 'AI Infra',
    desc: '推理优化、分布式训练、GPU 编程、模型服务，大模型时代的基础设施全栈学习。',
    link: '/docs/ai-infra/intro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
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
