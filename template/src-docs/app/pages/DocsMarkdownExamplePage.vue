<template>
  <main class="c-main">
    <app-markdown markdown="markdown"></app-markdown>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'DocsMarkdownExamplePage',
    data () {
      return {
        markdown: '# Title'
      }
    }
  }
</script>

<style lang="scss">
  // main.scss
  // @import "~github-markdown-css";
</style>
