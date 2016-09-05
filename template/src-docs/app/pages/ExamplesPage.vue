<template>
  <main>
    <h1>Examples</h1>
    <nav>
      <ul>
        <li>
          <a v-link="{name: 'ExamplesDefaultPage', exact: true}">Default</a>
        </li>
        <li>
          <a v-link="{name: 'ExamplesPrimaryPage'}">Primary</a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: 'Examples'
  }
</script>

<style lang="scss">
</style>
