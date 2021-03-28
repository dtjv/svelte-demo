<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  // local
  const dispatch = createEventDispatcher()
  let completed = false

  function toggleCompleted() {
    completed = !completed
    dispatch('toggleCompleted', { completed })
  }

  function removeCompleted() {
    dispatch('removeCompleted')
  }
</script>

<div>
  <button type="button" on:click={toggleCompleted}>
    {completed ? 'Uncheck' : 'Check'} all
  </button>
  <button type="button" on:click={removeCompleted}> Remove Completed </button>
</div>
