import { PrismaClient } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
	return json(posts);
};
