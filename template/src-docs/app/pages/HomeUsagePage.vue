<template>
  <section>
    <h3 class="c-main__sub-heading u-gutter">Usage</h3>
    <div class="c-item u-gutter">
      <div class="c-item__description">
        <p>Here's an example:</p>
      </div>
      <h4 class="c-item__heading">{{ pascalize name }}</h4>
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.primaryExample"></app-code>
      </div>
      <div class="c-item__description">
        <p>That's it!</p>
      </div>
    </div>
  </section>
</template>

<script>
  import primaryExample from '!!raw!src-docs/app/snippets/primary-example.html'

  export default {
    name: 'HomeUsagePage',
    data () {
      return {
        snippets: {
          primaryExample
        }
      }
    }
  }
</script>
