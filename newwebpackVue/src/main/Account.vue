<template>
    <div>
        <h1>我是Account</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped lang="scss">
body{
    div{
        font-style: italic;
    }
}
</style>