<script lang="ts">
  import { getPost } from 'src/store/posts';

  export let params: {[key: string]: string};

  const post = getPost(+params.id);
</script>

{#if $post.isSuccess}
  <h1 class="text-2xl">
    {$post.data.title}
  </h1>

  <p>
    {$post.data.body}
  </p>
{/if}
