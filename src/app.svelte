<svelte:options immutable />

<script lang="ts">
  import type { Todo } from '@/types/todo.type'
  import TodoList from '@/components/todo-list.svelte'
  import Alert from '@/components/alert.svelte'

  let todos: Todo[] = [
    { id: 1, task: 'Create a Svelte starter app', completed: true },
    { id: 2, task: 'Create your first component', completed: true },
    { id: 3, task: 'Complete the rest of the tutorial', completed: false },
  ]
</script>

<main>
  <Alert />
  <TodoList {todos} />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
