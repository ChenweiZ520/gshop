<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right" @click="$router.push('/login')">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="loading" v-else>
    </nav>
    <!--首页附近商家-->
    <ShopList></ShopList>
  </section>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ShopList from '@/components/ShopList/ShopList'
  
  export default {
    name: 'MSite',
    computed:{
      //...mapState(['address','categorys']),
      ...mapState({
        address:state=>state.msite.address,
        categorys:state=>state.msite.categorys
      }),
      
      //用于显示轮播的数组
      categorysArr(){
        const {categorys} = this
        const bigArr = []
        let smallArr = []
        
        categorys.forEach((item)=>{
          if (smallArr.length===0){
            bigArr.push(smallArr)
          }
          smallArr.push(item)
          if (smallArr.length===8){
            smallArr=[]
          }
        })
        
        return bigArr
      }
    },
    mounted () {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
      
    },
    watch:{
      //监视categorys改变
      categorys(){
        // 将回调延迟到下次DOM更新循环之后执行.在修改数据之后立即使用它,然后等待DOM更新
        this.$nextTick(()=>{
          //在列表显示完成之后创建
          new Swiper('.swiper-container',{
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  
  .msite  //首页
    width 100%
    background #f5f5f5
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    
</style>
