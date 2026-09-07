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
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="hero-buttons">
            <Link className="button button--primary button--lg" to="/docs/agent/intro">
              文档
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
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
