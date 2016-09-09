<template>
  <main class="c-main">
    <section class="c-main__section">
      <h2 class="c-main__heading">Examples</h2>
      <router-view></router-view>
    </section>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'Examples'
  }
</script>
