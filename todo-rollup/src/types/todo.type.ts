export type Todo = {
  id: number
  task: string
  completed: boolean
}

export type UpdatedTodo = Partial<Omit<Todo, 'id'>>
