import { Link, useLoaderData } from '@remix-run/react';

import * as welcomePost from './welcome-post.mdx';

function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx$/, ''),
    ...mod.attributes.meta,
  };
}

export const loader = () => {
  return [postFromModule(welcomePost)];
};

export default function BlogIndex() {
  const posts = useLoaderData();

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
            {post.description && (
              <p className='m-0 lg:m-0'>{post.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
