<script lang="ts">
  import { onDestroy } from 'svelte'
  import { alertStore } from '@/stores/alert-store'

  let visible: boolean
  let timeout: number

  function onMessageChange(message: string, ms = 3000) {
    clearTimeout(timeout)

    if (message) {
      visible = true
      timeout = setTimeout(() => {
        visible = false
      }, ms)
    } else {
      visible = false
    }
  }

  // reactive. any changes to the store will call `onMessageChange`, which
  // changes a component variable and thus triggers a DOM update (i.e.
  // a re-render).
  $: onMessageChange($alertStore)

  onDestroy(() => clearTimeout(timeout))
</script>

{#if visible}
  <div
    role="alert"
    class="z-50 fixed cursor-pointer text-sm font-medium mx-6 opacity-90 bg-gray-400 right-0 mt-4 text-white flex py-2 px-3"
    on:click={() => (visible = false)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      class="w-6 h-6 mr-2 fill-current"
    >
      <path
        d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
      />
    </svg>
    <p>{$alertStore}</p>
  </div>
{/if}

<!--
the boilerplate way to a store.

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { alertStore } from '@/stores/alert-store'

  // when a variable's value changes, the component's DOM is updated.
  // any part of the app can get access to the `alertStore`. when the value of
  // the `alertStore` changes, the registered subscription callback will run. in
  // this case, the `alertContent` variable will be updated, which will trigger
  // an update of this component's DOM.
  let alertContent = ''
  const unsubscribe = alertStore.subscribe((value) => (alertContent = value))

  onDestroy(unsubscribe)
</script>

{#if alertContent}
  <div on:click={() => (alertContent = '')}> <p>{alertContent}</p> </div>
{/if}
-->
