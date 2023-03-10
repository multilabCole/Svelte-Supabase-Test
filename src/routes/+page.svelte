<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts } = data);

	function rerunLoadFunction() {
		// a 
		invalidate('a')

		// b 
		invalidate('api/posts')

		// c 
		invalidate(url => url.href.includes('posts'))

		// d
		invalidateAll()
	}

</script>

<div class="max-w-2xl mx-auto mt-4">
	<h1 class="text-4xl">Posts</h1>

	<button on:click={rerunLoadFunction}>Rerun</button>

	<p class="my-6">Showing {posts.length} posts.</p>
	{#each posts as post}
		<div class="mb-4">
			<a href="posts/{post.slug}"><h2 class="text-2xl">{post.title}</h2></a>
			<p>{post.content}</p>
		</div>
	{/each}
</div>
