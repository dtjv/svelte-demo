# todo-rollup

A todo app based on this [MDN tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started).

## Additions

I added the following to the project:

- Typescript (w/ path alias)
- ESLint
- Prettier
- Tailwind CSS
- Inter font via Fontsource

## Editor

I use Vim with the following tools:

- sheerun/vim-polyglot (syntax highlight)
- neoclide/coc.nvim (intellisense)
- coc plugins:
  - coc-prettier
  - coc-tsserver
  - coc-svelte
  - coc-tailwindcss

vim-polyglot uses vim-svelte, which needs the extra configuration below to
recognize TypeScript in Svelte files.

```
let g:svelte_preprocessor_tags = [
  \ { 'name': 'ts', 'tag': 'script', 'as': 'typescript' }
  \ ]
let g:svelte_preprocessors = ['ts']
```

## License

[MIT License](LICENSE)
