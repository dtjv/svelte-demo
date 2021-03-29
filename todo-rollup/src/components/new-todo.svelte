<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { selectOnFocus } from '@/actions/select-onfocus'

  const dispatch = createEventDispatcher()
  let newTask = ''
  let newTaskEl: HTMLElement

  // lifecycle
  onMount(() => newTaskEl.focus())

  // handlers
  function addTodo() {
    dispatch('add', { newTask })
    newTask = ''
    newTaskEl.focus()
  }

  function onCancel() {
    newTask = ''
  }
</script>

<form
  on:submit|preventDefault={addTodo}
  on:keydown={(e) => e.key === 'Escape' && onCancel()}
>
  <label>
    <h2>What needs to be done?</h2>
    <input
      type="text"
      autocomplete="off"
      placeholder="Add a task (i.e. Buy Groceries)"
      bind:value={newTask}
      bind:this={newTaskEl}
      use:selectOnFocus
    />
    <button type="submit" disabled={!newTask}>
      Add
      <span class="sr-only">new task</span>
    </button>
  </label>
</form>
