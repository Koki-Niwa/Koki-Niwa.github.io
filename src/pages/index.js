import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import InkBackground from '@site/src/components/InkBackground.js';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const sealImgUrl = useBaseUrl('/img/seal-cutout.png');
  return (
    <header className="hero hero--ink">
      <InkBackground />
      <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text-block">
          <div className="hero-title-row">
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <img
              className="hero-seal-img"
              src={sealImgUrl}
              alt="Koki Blog seal"
            />
          </div>
          <p className="hero__subtitle">
            <Translate id="homepage.tagline" description="The tagline below the site title">
              学习记录
            </Translate>
          </p>
          <div className="hero-buttons">
            <Link className="button button--ink-primary button--lg" to="/docs/agent/intro">
              <Translate id="homepage.button.docs" description="Primary button linking to documentation">
                文档
              </Translate>
            </Link>
            <Link className="button button--ink-secondary button--lg" to="/blog">
              <Translate id="homepage.button.blog" description="Secondary button linking to blog">
                博客
              </Translate>
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
