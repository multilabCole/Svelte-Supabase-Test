<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { posts } = data;
</script>

<div class="max-w-2xl mx-auto mt-4">
	<h1 class="text-4xl">Posts</h1>
	<p class="my-6">Showing {posts.length} posts.</p>
	{#each posts as post}
		<div class="mb-4">
			<a href="posts/{post.slug}"><h2 class="text-2xl">{post.title}</h2></a>
			<p>{post.content}</p>
		</div>
	{/each}
</div>
