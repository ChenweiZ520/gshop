<template>
	<div>
    <ShopHeader></ShopHeader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import ShopHeader from './ShopHeader/ShopHeader'
  export default {
    name: 'Shop',
    mounted(){
      this.$store.dispatch('getGoods')
      this.$store.dispatch('getRatings')
      this.$store.dispatch('getInfo')
      
    },
    components:{
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
