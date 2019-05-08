import {
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from '@/store/mutation-types'
import {reqGoods, reqInfo, reqRatings} from '@/api'

const state = {
  goods:[],
  ratings:[],
  info:{}
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
}

export default {
  state,
  mutations,
  actions
}
