import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import InkBackground from '@site/src/components/InkBackground.js';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero hero--ink">
      <InkBackground />
      <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text-block">
          <div className="hero-title-row">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <svg className="hero-seal-svg" viewBox="0 0 64 64" width="58" height="58">
              <defs>
                <filter id="sealTexture">
                  <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="5" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <linearGradient id="sealGrad" x1="10%" y1="10%" x2="90%" y2="90%">
                  <stop offset="0%" stopColor="#a83828" />
                  <stop offset="40%" stopColor="#8b2500" />
                  <stop offset="70%" stopColor="#9c2b1e" />
                  <stop offset="100%" stopColor="#7a1f10" />
                </linearGradient>
                <pattern id="sealPores" patternUnits="userSpaceOnUse" width="4" height="4">
                  <circle cx="1" cy="1" r="0.4" fill="#f5e6d3" opacity="0.15" />
                  <circle cx="3" cy="3" r="0.3" fill="#f5e6d3" opacity="0.1" />
                </pattern>
              </defs>
              <g filter="url(#sealTexture)" transform="rotate(-3 32 32)">
                {/* 印章主体 */}
                <rect x="3" y="3" width="58" height="58" fill="url(#sealGrad)" rx="3" />
                {/* 印泥气孔纹理 */}
                <rect x="3" y="3" width="58" height="58" fill="url(#sealPores)" rx="3" />
                {/* 内框（双线边栏） */}
                <rect x="7" y="7" width="50" height="50" fill="none" stroke="#f0dcc8" strokeWidth="1.2" opacity="0.7" rx="1" />
                <rect x="9.5" y="9.5" width="45" height="45" fill="none" stroke="#f0dcc8" strokeWidth="0.5" opacity="0.4" rx="1" />
                {/* 十字分隔线 */}
                <line x1="32" y1="10" x2="32" y2="54" stroke="#f0dcc8" strokeWidth="0.5" opacity="0.3" />
                <line x1="10" y1="32" x2="54" y2="32" stroke="#f0dcc8" strokeWidth="0.5" opacity="0.3" />
                {/* 篆体风格文字 KOKI，2x2 布局 */}
                <g fill="#f5e6d3" fontFamily="'STKaiti', 'KaiTi', 'SimSun', serif" fontWeight="bold">
                  <text x="21" y="29" fontSize="15" textAnchor="middle" transform="rotate(-3 21 29)">K</text>
                  <text x="43" y="29" fontSize="15" textAnchor="middle" transform="rotate(2 43 29)">O</text>
                  <text x="21" y="47" fontSize="15" textAnchor="middle" transform="rotate(2 21 47)">K</text>
                  <text x="43" y="47" fontSize="15" textAnchor="middle" transform="rotate(-2 43 47)">I</text>
                </g>
                {/* 边角残缺效果 */}
                <circle cx="5" cy="5" r="2" fill="#f5f0e8" opacity="0.3" />
                <circle cx="59" cy="59" r="1.5" fill="#f5f0e8" opacity="0.25" />
                <circle cx="58" cy="8" r="1" fill="#f5f0e8" opacity="0.2" />
              </g>
            </svg>
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="hero-buttons">
            <Link className="button button--ink-primary button--lg" to="/docs/agent/intro">
              文档
            </Link>
            <Link className="button button--ink-secondary button--lg" to="/blog">
              博客
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Koki Blog - 学习记录。Agent、编译器、AI Infra 的技术学习笔记。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
