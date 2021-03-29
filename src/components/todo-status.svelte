<script lang="ts">
  import type { Todos } from '@/types/todos.type'

  // props
  export let todos: Todos = []

  // local
  let headingEl: HTMLElement

  // reactive
  $: numTodos = todos.length
  $: numCompletedTodos = todos.filter((todo) => todo.completed).length

  // read only export
  export function focus() {
    headingEl.focus()
  }
</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="-1">
  {numCompletedTodos} out of {numTodos} completed
</h2>
