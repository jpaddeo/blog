import { db } from './db';

export async function getPosts() {
  return db.post.findMany();
}
