//导入路由vue-router 包
import VueRouter from 'vue-router'
//导入 Account组件
import account from './main/Account.vue'
//导入 GoodsList 组件
import goodslist from './main/GoodsList.vue'

//导入 Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//3. 创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account' ,
            component: account,
            children: [
                {path: 'login',component:login },
                {path: 'register',component: register }
            ]
        },
        {path: '/goodslist' , component: goodslist},

    ]
})

/* 把路由对象暴露出去 */
export default router ;