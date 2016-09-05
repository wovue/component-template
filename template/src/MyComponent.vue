<template>
  <div :class="{'primary' : (type === 'primary')}">
    <input v-model="msg" type="text"/>
    <p v-text="msg"></p>
  </div>
</template>

<script>
  export default {
    props: [
      {
        name: 'type',
        type: String,
        default: 'default'
      }
    ],
    data () {
      return {
        msg: 'Hello'
      }
    }
  }
</script>

<style lang="scss">
.primary {
  border: 2px solid #000000;
  color: #000000;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;

  p {
    font-weight: bold;
    margin: 0;
  }

  input {
    border: 2px solid #000000;
    display: block;
    font-size: 1em;
    margin: 1em 0;
    outline: none;
    padding: .5em;
    width: 100%;
  }
}
</style>
