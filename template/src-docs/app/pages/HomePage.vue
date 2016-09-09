<template>
  <main class="c-main" role="main">
    <section class="c-main__section">
      <header>
        <h2 class="c-main__heading u-gutter">Getting started</h2>
      </header>
      <router-view></router-view>
    </section>
    <app-footer></app-footer>
  </main>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
