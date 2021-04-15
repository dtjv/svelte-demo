import type { Todos } from '@/types/todos.type'
import { localStore } from '@/stores/local-store'

const key = 'mdn-svelte-todo'
const initialTodos: Todos = [
  { id: 1, task: 'Create a Svelte starter app', completed: true },
  { id: 2, task: 'Create your first component', completed: true },
  { id: 3, task: 'Complete the rest of the tutorial', completed: false },
]

export const todosStore = localStore<Todos>(key, initialTodos)
