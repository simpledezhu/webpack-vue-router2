
<template>
    <div>
        <h1>这是App 组件</h1>

        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>