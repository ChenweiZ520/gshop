import {RECEIVE_USER, RESET_USER} from '@/store/mutation-types'
import {reqLogout, reqUser} from '@/api'

const state = {
  user:{},
}
const mutations = {
  [RECEIVE_USER](state,user){
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
}
const actions = {
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
}

export default {
  state,
  mutations,
  actions
}
