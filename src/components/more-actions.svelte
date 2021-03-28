<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Todo } from '@/types/todo.type'
  import type { Filters } from '@/types/filters.enum'
  import { filterTodos } from '@/utils/filter-todos'

  export let todos: Todo[]
  export let filter: Filters

  // local, reactive
  const dispatch = createEventDispatcher()
  let completed = false
  $: completedTodos = todos.filter((t) => t.completed)
  $: displayedTodos = filterTodos(filter, todos)

  function toggleCompleted() {
    completed = !completed
    dispatch('toggleCompleted', { completed })
  }

  function removeCompleted() {
    dispatch('removeCompleted')
  }
</script>

<div>
  <button
    type="button"
    disabled={displayedTodos.length === 0}
    on:click={toggleCompleted}
  >
    {completed ? 'Uncheck' : 'Check'} all
  </button>
  <button
    type="button"
    disabled={displayedTodos.length === 0 || completedTodos.length === 0}
    on:click={removeCompleted}
  >
    Remove Completed
  </button>
</div>
