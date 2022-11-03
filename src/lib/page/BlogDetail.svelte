<script lang="ts">
  import { getPost } from '../repository/posts';
  import { useQuery } from '@sveltestack/svelte-query';

  export let params;

  const q = useQuery(['posts', params.id], () => getPost(params.id));
</script>

{#if $q.isSuccess}
  <h1 class="text-2xl">
    {$q.data.title}
  </h1>

  <p>
    {$q.data.body}
  </p>
{/if}
