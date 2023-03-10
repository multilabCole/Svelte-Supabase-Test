import { prisma } from '$lib/prismaClient';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({url}) => {

  const limit = Number(url.searchParams.get('limit')) ?? 30;
  const order = url.searchParams.get('order') ?? 'asc'

  const posts = await prisma.post.findMany({
    orderBy: {id: order},
    take: limit > 0 ? limit : 30
  });
	return json(posts);
};
