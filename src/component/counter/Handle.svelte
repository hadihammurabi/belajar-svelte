<script>
  import { increment, decrement } from 'src/store/counters';
</script>

<div class="flex justify-center space-x-3">
  <button 
    class="text-xl border border-2 border-green-600 text-green-600 rounded px-3 py-1"
    on:click={decrement}
  >-</button>
  <button 
    class="text-xl border border-2 border-green-600 text-green-600 rounded px-3 py-1"
    on:click={increment}
  >+</button>
</div>
