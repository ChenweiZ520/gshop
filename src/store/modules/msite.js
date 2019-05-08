import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from '@/store/mutation-types'
import {reqAddress, reqCategorys, reqShops} from '@/api'

const state = {
  latitude:'40.10038',
  longitude:'116.36867',
  address:{},
  categorys:[],
  shops:[],
}
const mutations = {
  [RECEIVE_ADDRESS](state,address){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops = shops
  },
}
const actions = {
  //获取位置请求
  async getAddress({commit,state}){
    const {latitude,longitude} = state
    const req = await reqAddress(latitude,longitude)
    if (req.code===0){
      const address = req.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  //获取食品分类列表
  async getCategorys({commit}){
    const req = await reqCategorys()
    if (req.code===0){
      const categorys = req.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  //获取商家列表
  async getShops({commit,state}){
    const {latitude,longitude} = state
    const req = await reqShops({latitude,longitude})
    if (req.code===0){
      const shops = req.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
}

export default {
  state,
  mutations,
  actions
}
