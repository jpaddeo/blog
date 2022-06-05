import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { marked } from 'marked';

import { getPost } from '~/services/posts';

export const loader = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  const html = marked(post.markdown);

  return json({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData();
  return (
    <main>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
