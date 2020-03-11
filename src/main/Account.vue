<template>
  <div>
    <div>这是 Account 组件</div>

    <router-link to="/account/login">登录</router-link>
    <router-link to="/account/register">注册</router-link>

    <router-view></router-view>

  </div>
</template>


<script>
</script>

<style lang="scss" scoped>
  /*普通的 style 标签只支持普通的样式，如果想要启用 scss 或 less需要为 style元素设置 lang属性*/
  /*只要 style 标签是在组件 .vue 组件中定义的，推荐都为 style开启 scoped 属性 【局部】 */
  body{
    div{
      font-style: italic;
    }
  }

</style>
