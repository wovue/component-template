<template>
  <div>
    Root
    <nav>
      <ul>
        <li>
          <a v-link="{name: 'Home', exact: true}">Home</a>
        </li>
        <li>
          <a v-link="{name: 'Default'}">Default</a>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Root'
  }
</script>

<style lang="scss">
</style>
