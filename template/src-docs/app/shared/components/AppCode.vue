<template>
  <pre>
    <code class="hljs" :class="hljsCode.language">\{{{ hljsCode.value }}}</code>
  </pre>
</template>

<script>
  import hljs from 'highlight.js'

  hljs.configure({
    tabReplace: '  '
  })

  export default {
    props: [
      {
        name: 'code',
        type: String,
        default () {
          return ''
        }
      }
    ],
    computed: {
      hljsCode () {
        return hljs.highlightAuto(this.code)
      }
    }
  }
</script>

<style lang="scss">
  // main.scss
  // @import "~highlight.js/styles/atom-one-light.css";
</style>
