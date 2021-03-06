import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'
import Shop from '@/pages/shop/Shop'
import Goods from '@/pages/shop/Goods/Goods'
import Ratings from '@/pages/shop/Ratings/Ratings'
import Info from '@/pages/shop/Info/Info'

export default [
  {path:'/msite',component:MSite, meta:{isShowFoot:true}},
  {path:'/search',component:Search, meta:{isShowFoot:true}},
  {path:'/order',component:Order, meta:{isShowFoot:true}},
  {path:'/profile',component:Profile, meta:{isShowFoot:true}},
  {path:'/login',component:Login},
  {
    path:'/shop',
    component:Shop,
    children:[
      {path:'/shop/goods',component:Goods},
      {path:'/shop/ratings',component:Ratings},
      {path:'/shop/info',component:Info},
      {path:'/shop',redirect: '/shop/goods'}
    ]
  },
  {path:'/',redirect:'/msite'}
]
