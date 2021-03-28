import { Filters } from '@/types/filters.enum'
import type { Todos } from '@/types/todos.type'

export function filterTodos(filter: Filters, todos: Todos): Todos {
  switch (filter) {
    case Filters.ACTIVE:
      return todos.filter((todo) => !todo.completed)
    case Filters.COMPLETED:
      return todos.filter((todo) => todo.completed)
    default:
      return todos
  }
}
