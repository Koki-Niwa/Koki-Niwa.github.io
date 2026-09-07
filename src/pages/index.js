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
            <svg className="hero-seal-svg" viewBox="0 0 64 64" width="62" height="62">
              <defs>
                {/* 边缘毛边滤镜 - 增强效果 */}
                <filter id="sealEdge" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05 0.08" numOctaves="5" seed="11" result="edgeNoise" />
                  <feDisplacementMap in="SourceGraphic" in2="edgeNoise" scale="6" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="grain" />
                  <feComposite in="displaced" in2="grain" operator="arithmetic" k1="0" k2="1" k3="0.08" k4="0" />
                </filter>
                {/* 人形处理：去白底 + 变白色（白文） */}
                <filter id="runnerWhite" x="-10%" y="-10%" width="120%" height="120%">
                  {/* 第一步：亮度转 alpha - 暗的地方不透明，亮的地方透明（阈值约0.55，保留灰色头部） */}
                  <feColorMatrix type="matrix" values="
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    -0.7 -0.7 -0.7 0 2.1
                  " result="keyed" />
                  {/* 第二步：把人形颜色变成宣纸白 */}
                  <feColorMatrix type="matrix" values="
                    0 0 0 0 0.96
                    0 0 0 0 0.93
                    0 0 0 0 0.88
                    0 0 0 1 0
                  " result="whitened" />
                  {/* 第三步：加斑驳纹理 */}
                  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" seed="5" result="grain" />
                  <feComposite in="whitened" in2="grain" operator="arithmetic" k1="0" k2="1" k3="0.1" k4="0" />
                </filter>
                {/* 中国红渐变 */}
                <linearGradient id="sealRed" x1="15%" y1="10%" x2="85%" y2="90%">
                  <stop offset="0%" stopColor="#f0413a" />
                  <stop offset="35%" stopColor="#e60012" />
                  <stop offset="65%" stopColor="#d80000" />
                  <stop offset="100%" stopColor="#b80000" />
                </linearGradient>
                {/* 印泥颗粒纹理 */}
                <pattern id="inkGrain" patternUnits="userSpaceOnUse" width="3" height="3">
                  <circle cx="0.5" cy="0.5" r="0.3" fill="#fff" opacity="0.08" />
                  <circle cx="2" cy="2" r="0.25" fill="#fff" opacity="0.06" />
                  <circle cx="1.5" cy="0.8" r="0.2" fill="#8b0000" opacity="0.1" />
                </pattern>
              </defs>

              {/* 印章主体 - 不规则随形章 */}
              <g filter="url(#sealEdge)" transform="rotate(-4 32 32)">
                <path
                  d="M 10 6 Q 6 5 7 10 L 6 18 Q 5 22 7 26 L 5 34 Q 4 38 6 42 L 7 50 Q 8 56 14 57 L 22 58 Q 26 59 30 57 L 38 58 Q 42 59 46 57 L 52 56 Q 58 55 57 49 L 58 40 Q 59 36 57 32 L 58 24 Q 59 20 57 16 L 56 9 Q 55 4 49 5 L 40 6 Q 36 5 32 7 L 24 6 Q 20 5 16 7 Z"
                  fill="url(#sealRed)"
                />
                <path
                  d="M 10 6 Q 6 5 7 10 L 6 18 Q 5 22 7 26 L 5 34 Q 4 38 6 42 L 7 50 Q 8 56 14 57 L 22 58 Q 26 59 30 57 L 38 58 Q 42 59 46 57 L 52 56 Q 58 55 57 49 L 58 40 Q 59 36 57 32 L 58 24 Q 59 20 57 16 L 56 9 Q 55 4 49 5 L 40 6 Q 36 5 32 7 L 24 6 Q 20 5 16 7 Z"
                  fill="url(#inkGrain)"
                />
              </g>

              {/* 内部奔跑人形 - 白文 */}
              <g transform="rotate(-4 32 32)">
                <image
                  href="/img/seal-runner.png"
                  x="8"
                  y="6"
                  width="48"
                  height="48"
                  filter="url(#runnerWhite)"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              {/* 高光 - 模拟印泥光泽 */}
              <ellipse cx="24" cy="18" rx="8" ry="4" fill="#fff" opacity="0.06" transform="rotate(-20 24 18)" />
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
