import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useTransition } from '@remix-run/react';

import { createPost } from '~/services/posts';

export const action = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get('title');
  const slug = formData.get('slug');
  const markdown = formData.get('markdown');

  const errors = {
    title: title ? null : 'Title is required',
    slug: slug ? null : 'Slug is required',
    markdown: markdown ? null : 'Markdown is required',
  };

  const hasError = Object.values(errors).some((errorMessage) => errorMessage);

  if (hasError) {
    return json(errors);
  }

  await createPost({ title, slug, markdown });

  return redirect('/posts/admin');
};

export default function AdminNewPost() {
  const errors = useActionData();
  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <Form method='post'>
      <p>
        <label>
          Post Title:
          {errors?.title ? <em>{errors.title}</em> : null}
          <input type='text' name='title' />
        </label>
      </p>
      <p>
        <label>
          Post Slug:
          {errors?.slug ? <em>{errors.slug}</em> : null}
          <input type='text' name='slug' />
        </label>
      </p>
      <p>
        <label htmlFor='markdown'>
          Markdown:
          {errors?.markdown ? <em>{errors.markdown}</em> : null}
        </label>
        <br />
        <textarea id='markdown' rows={20} name='markdown' />
      </p>
      <p>
        <button type='submit' disabled={isCreating}>
          {isCreating ? 'Creating...' : 'Create Post'}
        </button>
      </p>
    </Form>
  );
}
