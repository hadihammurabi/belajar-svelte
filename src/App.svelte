<script>
    import { Router, Route, link } from 'svelte-routing';

    import Blog from 'src/page/Blog.svelte';
    import BlogDetail from 'src/page/BlogDetail.svelte';
    import Home from 'src/page/Home.svelte';
    import Counter from 'src/page/Counter.svelte';

    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
    const queryClient = new QueryClient();
</script>

<nav class="flex justify-center space-x-1">
  <a href="/" use:link>
    <button class="border px-3 py-1 rounded bg-blue-500 text-white">Home</button>
  </a>
  <a href="/blog" use:link>
    <button class="border px-3 py-1 rounded bg-blue-500 text-white">Blog</button>
  </a>
  <a href="/counter" use:link>
    <button class="border px-3 py-1 rounded bg-blue-500 text-white">Counter</button>
  </a>
</nav>

<QueryClientProvider client={queryClient}>
  <Router>
    <Route path='/'><Home /></Route>
    <Route path='/blog'><Blog /></Route>
    <Route path='/blog/:id' let:params><BlogDetail {params} /></Route>
    <Route path='/counter'><Counter /></Route>
  </Router>
</QueryClientProvider>
