<script>
  import { getAllPosts } from "../store/posts";

  const posts = getAllPosts();
</script>

<h1 class="text-2xl text-center mt-5">Blog</h1>

{#if $posts.isSuccess}
<div class="flex flex-wrap w-full">
  {#each $posts.data as post}
  <div class="w-1/4 p-3">
    <div class="shadow w-full h-full p-3">
      <h3 class="text-3xl">{post.title}</h3>
      <p class="mt-3 truncate">
        {post.body}
      </p>
      
      <div class="mb-5" style="position: relative">
        <a href={`/blog/${post.id}`} class="text-blue-600" style="position: absolute; right: 0">Selengkapnya</a>
      </div>
    </div>
  </div>
  {/each}
</div>
{/if}

{#if $posts.isLoading}
  <p class="text-center">
    Loading...
  </p>
{/if}
