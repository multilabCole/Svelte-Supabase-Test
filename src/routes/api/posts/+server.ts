import { prisma } from '$lib/prismaClient';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({url, route, params}) => {
  const posts = await prisma.post.findMany();
	return json(posts);
};
