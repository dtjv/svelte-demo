<script lang="ts">
  type Todo = {
    id: number
    name: string
    completed: boolean
  }

  // props
  export let todos = []

  // reactive
  $: numTodos = todos.length
  $: numCompletedTodos = todos.filter((todo) => todo.completed).length

  // handlers
  function removeTodo(todo: Todo) {
    todos = todos.filter((t) => t.id !== todo.id)
  }
</script>

<!-- html -->
<div class="px-20">
  <h1 class="text-2xl font-extrabold">Svelte To-do App</h1>

  <h2 id="list-heading">{numCompletedTodos} out of {numTodos} completed</h2>
  <ul role="list" aria-labelledby="list-heading">
    {#each todos as todo (todo.id)}
      <li>
        <label>
          <input
            type="checkbox"
            id="todo-{todo.id}"
            checked={todo.completed}
            on:click={() => (todo.completed = !todo.completed)}
          />
          {todo.name}
        </label>
        <button type="button"
          >Edit <span class="sr-only">{todo.name}</span></button
        >
        <button type="button" on:click={() => removeTodo(todo)}
          >Delete <span class="sr-only">{todo.name}</span></button
        >
      </li>
    {:else}
      <p>nothing to do</p>
    {/each}
  </ul>
</div>
