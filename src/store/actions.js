//提交mutation模块

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
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
  //获取user
  async getUser({commit}){
    const req = await reqUser()
    if (req.code===0){
      const user = req.data
      commit(RECEIVE_USER,user)
    }
  },
  //退出登录
  async logout({commit}){
    const req = await reqLogout()
    if (req.code===0){
      commit(RESET_USER)
    }
  },
  //获取商品
  async getGoods({commit}){
    const req = await reqGoods()
    if (req.code===0){
      const goods = req.data
      commit(RECEIVE_GOODS,{goods})
    }
  },
  //获取评论
  async getRatings({commit}){
    const req = await reqRatings()
    if (req.code===0){
      const ratings = req.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  //获取商家
  async getInfo({commit}){
    const req = await reqInfo()
    if (req.code===0){
      const info = req.data
      commit(RECEIVE_INFO,{info})
    }
  },

}
