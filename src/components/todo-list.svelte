<script lang="ts">
  import type { Todo } from '@/types/todo.type'
  import { Filters } from '@/types/filters.enum'
  import FilterButtons from '@/components/filter-buttons.svelte'
  import TodoItem from '@/components/todo-item.svelte'
  import MoreActions from '@/components/more-actions.svelte'
  import { filterTodos } from '@/utils/filter-todos'

  // props
  export let todos = []

  // local, reactive
  let newTask = ''
  let filter: Filters = Filters.ALL
  $: numTodos = todos.length
  $: numCompletedTodos = todos.filter((todo) => todo.completed).length
  $: newTodoId = numTodos ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1

  // handlers
  function removeTodo(todo: Todo) {
    todos = todos.filter((t) => t.id !== todo.id)
  }

  function updateTodo(updatedTodo: Todo) {
    const index = todos.findIndex((t) => t.id === updatedTodo.id)
    todos[index] = { ...todos[index], ...updatedTodo }
  }

  function addTodo() {
    todos = [...todos, { id: newTodoId, task: newTask, completed: false }]
    newTask = ''
  }

  function toggleCompleted(completed: boolean) {
    todos = todos.map((todo) => ({ ...todo, completed }))
  }

  function removeCompleted() {
    todos = todos.filter((todo) => !todo.completed)
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
      <button type="submit" disabled={!newTask}>
        Add
        <span class="sr-only">new task</span>
      </button>
    </label>
  </form>

  <!-- Filter -->
  <FilterButtons bind:filter />

  <!-- Stats -->
  <h2 id="list-heading">{numCompletedTodos} out of {numTodos} completed</h2>

  <!-- TodoList -->
  <ul role="list" aria-labelledby="list-heading">
    {#each filterTodos(filter, todos) as todo (todo.id)}
      <TodoItem
        {todo}
        on:update={(e) => updateTodo(e.detail.todo)}
        on:remove={(e) => removeTodo(e.detail.todo)}
      />
    {:else}
      <li>nothing to do</li>
    {/each}
  </ul>

  <!-- More Actions -->
  <MoreActions
    {todos}
    {filter}
    on:toggleCompleted={(e) => toggleCompleted(e.detail.completed)}
    on:removeCompleted={() => removeCompleted()}
  />
</div>
