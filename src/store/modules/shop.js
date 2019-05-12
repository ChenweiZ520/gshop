
import Vue from 'vue'
import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  ADD_FOOD_COUNT,
  DELETE_FOOD_COUNT,
  CLEAR_CART
} from '@/store/mutation-types'
import {reqGoods, reqInfo, reqRatings} from '@/api'

const state = {
  goods:[],
  ratings:[],
  info:{},
  cartFoods:[]
}
const mutations = {
  [RECEIVE_GOODS](state,goods){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,ratings){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,info){
    state.info = info
  },

  [ADD_FOOD_COUNT](state,{food}){
    if (food.count){
      food.count++
    }else{
      Vue.set(food,'count',1)
      state.cartFoods.push(food)
    }
  },
  [DELETE_FOOD_COUNT](state,{food}){
    if (food.count>0){
      food.count--

      if (food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }

    }
  },

  //清空购物车
  [CLEAR_CART](state){
    state.cartFoods.forEach(food => food.count = 0)
    state.cartFoods = []
  },



}
const actions = {
  //获取商品
  async getGoods({commit}){
    const req = await reqGoods()
    if (req.code===0){
      const goods = req.data
      commit(RECEIVE_GOODS,goods)
    }
  },
  //获取评论
  async getRatings({commit}){
    const req = await reqRatings()
    if (req.code===0){
      const ratings = req.data
      commit(RECEIVE_RATINGS,ratings)
    }
  },
  //获取商家
  async getInfo({commit}){
    const req = await reqInfo()
    if (req.code===0){
      const info = req.data
      commit(RECEIVE_INFO,info)
    }
  },
  //更新食物count
  updateFoodCount({commit},{isAdd,food}){

    if(isAdd){
      commit(ADD_FOOD_COUNT,{food})
    } else {
      commit(DELETE_FOOD_COUNT,{food})
    }
  },


}

const getters = {
  //购物车中food的总数量
  totalFoodCount(state){
    return state.cartFoods.reduce((pre,food)=> pre + food.count,0)
  },
  //购物车中food的总价格
  totalFoodPrice(state){
    return state.cartFoods.reduce((pre,food)=> pre + food.count * food.price,0)
  },
  //ratings的总数量
  totalRatingCount(state){
    return state.ratings.length
  },
  //推荐的数量
  positiveTotalCount(state){
    return state.ratings.reduce((pre,rating)=>pre+(rating.rateType===0?1:0),0)
  }



}

export default {
  state,
  mutations,
  actions,
  getters
}
