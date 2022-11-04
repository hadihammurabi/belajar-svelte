<script lang="ts">
  import { getJoke } from "src/store/jokes";

  const joke = getJoke();
</script>

<h1 class="text-2xl text-center mt-5">Home</h1>

{#if $joke.isSuccess}
  <p class="text-center">
    {$joke.data?.joke}
  </p>
{/if}

{#if $joke.isError}
  <p class="text-center">
    Error while loading the joke.
  </p>
{/if}

{#if $joke.isLoading || $joke.isRefetching}
  <p class="text-center">
    Loading...
  </p>
{/if}

<div class="text-center mt-5">
  <button on:click={() => $joke.refetch()} class="border px-3 py-1 rounded bg-green-500 text-white">Refresh</button>
</div>
