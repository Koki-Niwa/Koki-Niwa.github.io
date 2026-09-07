import React, { useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

// Giscus 评论配置
// 使用前请先到 https://giscus.app 配置，获取 repoId 和 categoryId
const giscusConfig = {
  repo: 'Koki-Niwa/Koki-Niwa.github.io',
  repoId: '', // TODO: 从 https://giscus.app 获取后填入
  category: 'Announcements',
  categoryId: '', // TODO: 从 https://giscus.app 获取后填入
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'zh-CN',
};

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    // 如果未配置 repoId 和 categoryId，不渲染评论
    if (!giscusConfig.repoId || !giscusConfig.categoryId) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', giscusConfig.repo);
    script.setAttribute('data-repo-id', giscusConfig.repoId);
    script.setAttribute('data-category', giscusConfig.category);
    script.setAttribute('data-category-id', giscusConfig.categoryId);
    script.setAttribute('data-mapping', giscusConfig.mapping);
    script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled);
    script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata);
    script.setAttribute('data-input-position', giscusConfig.inputPosition);
    script.setAttribute('data-theme', colorMode === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', giscusConfig.lang);
    script.setAttribute('data-loading', 'lazy');

    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
      giscusContainer.innerHTML = '';
      giscusContainer.appendChild(script);
    }

    return () => {
      if (giscusContainer) {
        giscusContainer.innerHTML = '';
      }
    };
  }, [colorMode]);

  // 未配置时显示提示
  if (!giscusConfig.repoId || !giscusConfig.categoryId) {
    return null;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '3rem auto 0', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>评论</h2>
      <div id="giscus-container" />
    </div>
  );
}
