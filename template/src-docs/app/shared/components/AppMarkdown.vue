<template>
  <article class="markdown-body" v-html="markdown | marked"></article>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'

  export default {
    props: [
      {
        name: 'markdown',
        type: String,
        default () {
          return ''
        }
      }
    ],
    filters: {
      marked (code) {
        return marked(code, {
          langPrefix: 'hljs ',
          highlight (code) {
            return hljs.highlightAuto(code).value
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  // main.scss
  // @import "~github-markdown-css";

  .markdown-body {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
</style>
