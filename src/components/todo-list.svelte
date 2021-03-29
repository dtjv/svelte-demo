<script lang="ts">
  import type { Todo } from '@/types/todo.type'
  import type { Todos } from '@/types/todos.type'
  import { Filters } from '@/types/filters.enum'
  import { filterTodos } from '@/utils/filter-todos'
  import TodoStatus from '@/components/todo-status.svelte'
  import TodoItem from '@/components/todo-item.svelte'
  import NewTodo from '@/components/new-todo.svelte'
  import MoreActions from '@/components/more-actions.svelte'
  import FilterButtons from '@/components/filter-buttons.svelte'

  // props
  export let todos: Todos = []

  // local
  let filter: Filters = Filters.ALL
  let todoStatus // a reference to TodoStatus component instance

  // reactive
  $: newTodoId = todos.length
    ? Math.max(...todos.map((todo) => todo.id)) + 1
    : 1

  // event handlers
  function removeTodo(todo: Todo) {
    todos = todos.filter((t) => t.id !== todo.id)
    todoStatus.focus() // use ref to TodoStatus instance to call `.focus()`
  }

  function updateTodo(updatedTodo: Todo) {
    const index = todos.findIndex((t) => t.id === updatedTodo.id)
    todos[index] = { ...todos[index], ...updatedTodo }
  }

  function addTodo(newTask: string) {
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

<div class="px-20">
  <h1 class="text-2xl font-extrabold">Svelte To-do App</h1>

  <NewTodo on:add={(e) => addTodo(e.detail.newTask)} />

  <FilterButtons bind:filter />

  <TodoStatus {todos} bind:this={todoStatus} />

  <ul role="list" aria-labelledby="list-heading">
    {#each filterTodos(filter, todos) as todo (todo.id)}
      <TodoItem
        {todo}
        on:update={(e) => updateTodo(e.detail.todo)}
        on:remove={(e) => removeTodo(e.detail.todo)}
      />
    {:else}
      <li>Nothing to do here!</li>
    {/each}
  </ul>

  <MoreActions
    {todos}
    {filter}
    on:toggleCompleted={(e) => toggleCompleted(e.detail.completed)}
    on:removeCompleted={() => removeCompleted()}
  />
</div>
