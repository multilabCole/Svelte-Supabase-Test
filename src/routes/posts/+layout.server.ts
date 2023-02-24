import { prisma } from "$lib/prismaClient";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad =async (event) => {

  const posts = await prisma.post.findMany({
    select: {
      title: true,
      slug: true
    },
    take: 4
  })

  return {posts}
  
}