//提交mutation模块

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
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
