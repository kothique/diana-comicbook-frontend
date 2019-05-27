<template>
  <main id="app">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="stylus">
html, body
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  margin 0

#app
  display flex
  align-items stretch
  height 100%
</style>
