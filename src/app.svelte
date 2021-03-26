<script lang="ts">
  import Todos from '@/components/todos.svelte'

  let todos = [
    { id: 1, task: 'Create a Svelte starter app', completed: true },
    { id: 2, task: 'Create your first component', completed: true },
    { id: 3, task: 'Complete the rest of the tutorial', completed: false },
  ]
</script>

<main>
  <Todos {todos} />
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
