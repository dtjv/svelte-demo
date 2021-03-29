<svelte:options immutable />

<script lang="ts">
  import { todosStore } from '@/stores/todos-store'
  import Alert from '@/components/alert.svelte'
  import TodoList from '@/components/todo-list.svelte'
</script>

<main>
  <Alert />
  <TodoList bind:todos={$todosStore} />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
