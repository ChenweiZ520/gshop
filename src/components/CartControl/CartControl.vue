<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-remove_circle_outline"
           v-show="food.count" @click.stop="updateCount(false)"></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-add_circle" @click.stop="updateCount(true)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CartControl',
    props:{
      food:Object
    },
    methods:{
      updateCount(isAdd){
        this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
    
    .icon-remove_circle_outline
      &.move-enter-active,&.move-leave-active
        transition all 0.5s
      &.move-enter,&.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>
