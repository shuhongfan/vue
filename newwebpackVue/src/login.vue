<template>
    <div>
        <h1>这是登录组件，使用.vue定义出来的---{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){//组件中的data必须是function
            return{
                msg:'123',
            }
        },
        methods:{
            show(){
                console.log('调用了 login.vue 的show方法')
            }
        }
    }
</script>

<style scoped>

</style>