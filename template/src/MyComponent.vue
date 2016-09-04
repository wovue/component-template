<template>
  <div>
    <p>MyComponent</p>
    <input v-model="msg" type="text"/>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello'
      }
    }
  }
</script>

<style lang="scss">
</style>
