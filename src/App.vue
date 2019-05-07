<template>
  <div id="app">
    <router-view></router-view>
    <FootGuider v-show="$route.meta.isShowFoot"></FootGuider>
  </div>
</template>

<script>
  import FootGuider from './components/FootGuiter/FootGuiter'
  
  export default {
    name: 'App',
    components:{
      FootGuider
    },
    mounted () {
      this.$store.dispatch('getAddress')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
