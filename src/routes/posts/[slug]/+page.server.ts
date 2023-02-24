import { prisma } from '$lib/prismaClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const post = await prisma.post.findUnique({
		where: { slug: params?.slug || '' }
	});

  if (!post) {
    throw error(404, 'Post not found')
  }

	console.log('post', post)

	return { post };
};
