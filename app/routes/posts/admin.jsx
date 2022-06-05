import { json } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';

import { getPosts } from '~/services/posts';

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData();
  return (
    <div>
      <h1>Blog Admin</h1>
      <div>
        <nav>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
