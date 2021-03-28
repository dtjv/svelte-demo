<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Todo, UpdatedTodo } from '@/types/todo.type'

  // props
  export let todo: Todo

  // local
  const dispatch = createEventDispatcher()
  let isEditing = false
  let task = todo.task

  // listeners on dispatched events get a `detail` prop on `event`. i added an
  // object on `detail` with the name of the data. to access:
  // `event.detail.todo`
  function updateTodo(updatedTodo: UpdatedTodo) {
    todo = { ...todo, ...updatedTodo }
    dispatch('update', { todo })
  }

  function onCancel() {
    isEditing = false
    task = todo.task
  }

  function onSave() {
    updateTodo({ task })
    isEditing = false
  }

  function onRemove() {
    dispatch('remove', { todo })
  }

  function onEdit() {
    isEditing = true
  }

  function onToggle() {
    updateTodo({ completed: !todo.completed })
  }
</script>

<!--
  the keydown is scoped to the form. it only works when cursor is in field.
-->
<li>
  {#if isEditing}
    <form
      on:submit|preventDefault={onSave}
      on:keydown={(e) => e.key === 'Escape' && onCancel()}
    >
      <label>
        New task name for '{todo.task}'
        <input
          type="text"
          autocomplete="off"
          placeholder="Add a task (i.e. Buy Groceries)"
          bind:value={task}
        />
      </label>
      <button type="button" on:click={onCancel}>
        Cancel <span class="sr-only">renmaing {todo.task}</span>
      </button>
      <button type="submit" disabled={!task}>
        Save <span class="sr-only">new name for {todo.task}</span>
      </button>
    </form>
  {:else}
    <label>
      <input type="checkbox" checked={todo.completed} on:click={onToggle} />
      {todo.task}
    </label>
    <button type="button" on:click={onEdit}>
      Edit <span class="sr-only">{todo.task}</span>
    </button>
    <button type="button" on:click={onRemove}>
      Delete <span class="sr-only">{todo.task}</span>
    </button>
  {/if}
</li>
