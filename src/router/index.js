import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('@/views/home/home')
const Cart = ()=> import( '@/views/cart/cart')
const Menu = ()=> import( '@/views/menu/menu')
const Profile = ()=> import( '@/views/profile/profile')


Vue.use(VueRouter)
// 前端路由 通过调用 location提供的 api 来更改 url，再将对应的组件替换到 <router-views/>的位置来实现
// 可以通过<router-link>标签，也可以通过vue提供的api，常用的有 this.$router.push(path) 和 replace(path)，后者没有历史记录。
const routes = [
  {
    path: '',
    // 路由重定向，将 path指定的路由跳转到下面这个
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
