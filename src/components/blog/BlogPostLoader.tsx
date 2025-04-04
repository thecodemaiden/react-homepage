// src/components/BlogPostLoader
// Co-pilot suggestion

import React, { Suspense } from 'react';
interface PostLoaderProps {
    post_id: number;
}

const loadComponent = (post_id: number) => {
  const padded_id = post_id.toString().padStart(4, '0');
  return React.lazy(() => import(`./posts/Post_${padded_id}`));
};

const BlogPostLoader = ({ post_id }: PostLoaderProps) => {
  const Component = loadComponent(post_id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default BlogPostLoader;