export function selectOnFocus(node: HTMLInputElement): { destroy: () => void } {
  if (typeof node?.select !== 'function') {
    throw new Error('Use action for HTMLInputElement only')
  }

  const onFocus = () => node.select()
  node.addEventListener('focus', onFocus)

  return {
    destroy: () => {
      node.removeEventListener('focus', onFocus)
    },
  }
}
