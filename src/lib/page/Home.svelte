<script lang="ts">
  import { getJoke } from "../repository/jokes";

  import { useQuery } from '@sveltestack/svelte-query';

  const q = useQuery('joke', getJoke, { staleTime: 0 });

  const refresh = () => {
    $q.refetch();
  };
</script>

<h1 class="text-2xl text-center mt-5">Home</h1>

{#if $q.isSuccess}
  <p class="text-center">
    {$q.data?.joke}
  </p>
{/if}

{#if $q.isError}
  <p class="text-center">
    Error while loading the joke.
  </p>
{/if}

{#if $q.isLoading}
  <p class="text-center">
    Loading...
  </p>
{/if}

<div class="text-center mt-5">
  <button on:click={refresh} class="border px-3 py-1 rounded bg-green-500 text-white">Refresh</button>
</div>
