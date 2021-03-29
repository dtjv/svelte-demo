import { writable, Writable } from 'svelte/store'

const toString = (value) => JSON.stringify(value, null, 2)
const toObject = JSON.parse

export function localStore<T>(key: string, initialValue: T): Writable<T> {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, toString(initialValue))
  }

  const savedData = toObject(localStorage.getItem(key))
  const { subscribe, set, update } = writable<T>(savedData)

  return {
    subscribe,
    update,
    set: (newValue: T) => {
      localStorage.setItem(key, toString(newValue))
      return set(newValue)
    },
  }
}
