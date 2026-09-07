import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostPage {...props} />
      <GiscusComponent />
    </>
  );
}
