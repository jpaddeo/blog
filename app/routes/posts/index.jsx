import { Link, useLoaderData } from '@remix-run/react';

import { getPosts } from '~/services/posts';

export const loader = async () => {
  return {
    posts: await getPosts(),
  };
};

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
