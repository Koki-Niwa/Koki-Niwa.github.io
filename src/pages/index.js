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
                {/* 印泥斑驳纹理 */}
                <filter id="sealInk" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="5" seed="7" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
                  <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" seed="3" result="grain" />
                  <feComposite in="displaced" in2="grain" operator="arithmetic" k1="0" k2="1" k3="0.15" k4="0" />
                </filter>
                {/* 边缘毛边滤镜 */}
                <filter id="sealEdge" x="-15%" y="-15%" width="130%" height="130%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" seed="11" result="edgeNoise" />
                  <feDisplacementMap in="SourceGraphic" in2="edgeNoise" scale="3.5" xChannelSelector="R" yChannelSelector="G" />
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
                {/* 不规则印章轮廓 - 像随形石章 */}
                <path
                  d="M 10 6 Q 6 5 7 10 L 6 18 Q 5 22 7 26 L 5 34 Q 4 38 6 42 L 7 50 Q 8 56 14 57 L 22 58 Q 26 59 30 57 L 38 58 Q 42 59 46 57 L 52 56 Q 58 55 57 49 L 58 40 Q 59 36 57 32 L 58 24 Q 59 20 57 16 L 56 9 Q 55 4 49 5 L 40 6 Q 36 5 32 7 L 24 6 Q 20 5 16 7 Z"
                  fill="url(#sealRed)"
                />
                {/* 印泥颗粒 */}
                <path
                  d="M 10 6 Q 6 5 7 10 L 6 18 Q 5 22 7 26 L 5 34 Q 4 38 6 42 L 7 50 Q 8 56 14 57 L 22 58 Q 26 59 30 57 L 38 58 Q 42 59 46 57 L 52 56 Q 58 55 57 49 L 58 40 Q 59 36 57 32 L 58 24 Q 59 20 57 16 L 56 9 Q 55 4 49 5 L 40 6 Q 36 5 32 7 L 24 6 Q 20 5 16 7 Z"
                  fill="url(#inkGrain)"
                />
              </g>

              {/* 内部舞动的人形 - K 字母变形 */}
              <g filter="url(#sealInk)" transform="rotate(-4 32 32)">
                <g fill="#fff5ee" stroke="#fff5ee" strokeWidth="0.5" strokeLinejoin="round">
                  {/* 头部 */}
                  <circle cx="32" cy="16" r="4.5" />
                  {/* 身体主干（K 的竖线） */}
                  <path d="M 32 20 L 30 36 L 31 48" stroke="#fff5ee" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* 左臂 - 向上扬起（舞动） */}
                  <path d="M 31 27 L 20 19" stroke="#fff5ee" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* 右臂 - 更高扬起（舞动的动感） */}
                  <path d="M 31 25 L 44 16" stroke="#fff5ee" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* 左腿 */}
                  <path d="M 31 42 L 22 52" stroke="#fff5ee" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* 右腿 - 向前迈出（奔跑感） */}
                  <path d="M 31 42 L 42 50" stroke="#fff5ee" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  {/* 飘动的衣袖/丝带 - 增加动感 */}
                  <path d="M 20 19 Q 16 22 18 26" stroke="#fff5ee" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
                  <path d="M 44 16 Q 48 18 47 23" stroke="#fff5ee" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8" />
                </g>
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
