<script lang="ts">
  type Todo = {
    id: number
    task: string
    completed: boolean
  }

  // props
  export let todos = []

  let newTask = ''
  $: numTodos = todos.length
  $: numCompletedTodos = todos.filter((todo) => todo.completed).length

  $: console.log(todos)
  // handlers
  function removeTodo(todo: Todo) {
    todos = todos.filter((t) => t.id !== todo.id)
  }

  function addTodo() {
    let id = Math.max(...todos.map((todo) => todo.id)) + 1
    todos = [...todos, { id, task: newTask, completed: false }]
    newTask = ''
  }
</script>

<!-- Todos -->
<div class="px-20">
  <h1 class="text-2xl font-extrabold">Svelte To-do App</h1>

  <!-- NewTodo -->
  <form on:submit|preventDefault={addTodo}>
    <label>
      <h2>What needs to be done?</h2>
      <input
        type="text"
        autocomplete="off"
        placeholder="Add a task (i.e. Buy Groceries)"
        bind:value={newTask}
      />
    </label>

    <h2 id="list-heading">{numCompletedTodos} out of {numTodos} completed</h2>
    <ul role="list" aria-labelledby="list-heading">
      {#each todos as todo (todo.id)}
        <li>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              on:click={() => (todo.completed = !todo.completed)}
            />
            {todo.task}
          </label>
          <button type="button"
            >Edit <span class="sr-only">{todo.task}</span></button
          >
          <button type="button" on:click={() => removeTodo(todo)}
            >Delete <span class="sr-only">{todo.task}</span></button
          >
        </li>
      {:else}
        <p>nothing to do</p>
      {/each}
    </ul>
  </form>
</div>
