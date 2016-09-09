<template>
  <section>
    <h3 class="c-main__sub-heading u-gutter">Installation</h3>
    <div class="c-item u-gutter">
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.installation"></app-code>
      </div>
      <div class="c-item__description">
        <p>You have two ways to setup {{ name }}:</p>
      </div>
      <h5 class="c-item__sub-heading">Include</h5>
      <div class="c-item__description">
        <p>Include it directly with a <code>&lt;script&gt;</code> tag. In this case, you don't need to write <code>Vue.use({{ pascalize name }})</code>, this will be done automatically for you.</p>
      </div>
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.installationInclude"></app-code>
      </div>
      <h5 class="c-item__sub-heading">CommonJS (Webpack/Browserify)</h5>
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.installationCommonjs"></app-code>
      </div>
    </div>
  </section>
</template>

<script>
  import installation from '!!raw!src-docs/app/snippets/installation'
  import installationInclude from '!!raw!src-docs/app/snippets/installation-include.html'
  import installationCommonjs from '!!raw!src-docs/app/snippets/installation-commonjs'

  export default {
    name: 'HomeDefaultPage',
    data () {
      return {
        snippets: {
          installationInclude,
          installation,
          installationCommonjs
        }
      }
    }
  }
</script>
