<template>
  <main class="c-main">
    <div class="u-gutter">
      <app-markdown :markdown="markdown"></app-markdown>
    </div>
    <app-footer></app-footer>
  </main>
</template>

<script>
  import docsMarkdownExample from '!!raw!src-docs/app/snippets/docs-markdown-example.md'

  export default {
    name: 'DocsMarkdownExamplePage',
    data () {
      return {
        markdown: docsMarkdownExample
      }
    }
  }
</script>
