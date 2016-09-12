<template>
  <main class="c-main">
    <div class="u-gutter">
      <article class="markdown-body c-markdown-body" v-html="docsMarkdownExample"></article>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import docsMarkdownExample from 'src-docs/app/snippets/docs-markdown-example.md'

  export default {
    name: 'DocsMarkdownExamplePage',
    data () {
      return {
        docsMarkdownExample
      }
    }
  }
</script>
