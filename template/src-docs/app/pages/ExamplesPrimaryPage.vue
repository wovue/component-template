<template>
  <div>
    <h3 class="c-main__sub-heading">Primary</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper" v-html="snippets.primaryExample"></div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <{{ name }} modifier="primary"></{{ name }}>
    </div>
  </div>
</template>

<script>
  import primaryExample from 'src-docs/app/snippets/primary-example.md'

  export default {
    name: 'ExamplesPrimaryPage',
    data () {
      return {
        snippets: {
          primaryExample
        }
      }
    }
  }
</script>
