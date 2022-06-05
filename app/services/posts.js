import { db } from './db';

export async function getPosts() {
  return db.post.findMany();
}

export async function getPost(slug) {
  return db.post.findUnique({ where: { slug } });
}

export async function createPost(post) {
  return db.post.create({ data: post });
}
