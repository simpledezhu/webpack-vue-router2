import Vue from 'vue'
//1.导入vue-router 包
import VueRouter from 'vue-router'
//2. 手动安装vue-router
Vue.use(VueRouter)
//导入app组件
import app from './App.vue'
//导入自定义路由模块
import router from './router.js'

var vm = new Vue({
  el: '#app',
  //render 会把el指定的容器中所有的内容都情况覆盖，
  // 所以不要把路由的 router-link 和 router-view 直接接写到 el 元素中
  render :c => c(app),

  router   //将路由对象挂载到 vm 上
})

//注意： App这个组件，是通过 VM 实例的 render函数渲染出来得，render 函数如果要渲染组件，
//渲染出来得组件，只能放大到 el : '#app' 所指定的 元素中

//account 和 GoodsList 组件，是通过路由监听的，所以这两个组件只能展示到属于路由的router-view中去

