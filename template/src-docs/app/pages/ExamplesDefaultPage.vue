<template>
  <div>
    <h3 class="c-main__sub-heading">Default</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.defaultExample"></app-code>
      </div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <{{ name }}></{{ name }}>
    </div>
  </div>
</template>

<script>
  import defaultExample from '!!raw!src-docs/app/snippets/default-example.html'

  export default {
    name: 'ExamplesDefaultPage',
    data () {
      return {
        snippets: {
          defaultExample
        }
      }
    }
  }
</script>
