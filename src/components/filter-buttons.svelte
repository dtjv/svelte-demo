<script lang="ts">
  import { Filters } from '@/types/filters.enum'

  export let filter: Filters = Filters.ALL
</script>

<div>
  <button type="button" on:click={() => (filter = Filters.ALL)}>
    <span class="sr-only">Show</span>
    All
    <span class="sr-only">Tasks</span>
  </button>
  <button type="button" on:click={() => (filter = Filters.ACTIVE)}>
    <span class="sr-only">Show</span>
    Active
    <span class="sr-only">Tasks</span>
  </button>
  <button type="button" on:click={() => (filter = Filters.COMPLETED)}>
    <span class="sr-only">Show</span>
    Completed
    <span class="sr-only">Tasks</span>
  </button>
</div>
