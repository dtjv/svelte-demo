import { writable } from 'svelte/store'

export const alertStore = writable<string>('Welcome to the Svelte Todo App!')
