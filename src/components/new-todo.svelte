<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  let newTask = ''

  function addTodo() {
    dispatch('add', { newTask })
    newTask = ''
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
    />
    <button type="submit" disabled={!newTask}>
      Add
      <span class="sr-only">new task</span>
    </button>
  </label>
</form>
