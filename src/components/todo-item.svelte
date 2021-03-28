<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Todo } from '@/types/todo.type'

  // props
  export let todo: Todo

  // local
  const dispatch = createEventDispatcher()
</script>

<li>
  <label>
    <input
      type="checkbox"
      checked={todo.completed}
      on:click={() => (todo.completed = !todo.completed)}
    />
    {todo.task}
  </label>
  <button type="button">
    Edit <span class="sr-only">{todo.task}</span>
  </button>
  <button type="button" on:click={() => dispatch('remove', { todo })}>
    Delete <span class="sr-only">{todo.task}</span>
  </button>
</li>
