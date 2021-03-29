import { writable, Writable } from 'svelte/store'
import type { Todos } from '@/types/todos.type'

const toString = (value) => JSON.stringify(value, null, 2)
const toObject = JSON.parse

export function localStore(
  key: string,
  initialValue: Todos = []
): Writable<Todos> {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, toString(initialValue))
  }

  const savedData = toObject(localStorage.getItem(key))
  const { subscribe, set, update } = writable(savedData)

  return {
    subscribe,
    update,
    set: (newValue) => {
      localStorage.setItem(key, toString(newValue))
      return set(newValue)
    },
  }
}
