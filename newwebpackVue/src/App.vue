<template>
    <div>
        <h1>APP组件</h1>
        <mt-button icon="back" type="danger">danger</mt-button>
        <mt-button disabled size="large" type="danger">danger</mt-button>
        <mt-button @click="show" plain size="smaill" type="danger">danger</mt-button>
<!--        <mybtn>54456</mybtn>-->
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>

        <router-link to="/goodslist">goodlist</router-link>
        <router-link to="/account">account</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "App",
        data(){
            return{
                instance:null
            }
        },
        created(){
            this.getList()
        },
        methods:{
            show(){
                this.instance =Toast({
                    message: '提示',
                    position: 'top',
                    duration: -1,
                    iconClass: 'glyphicon glyphicon-heart',
                    className:'mytoast'
                });
            },
            getList(){
                this.show()
                setTimeout( ()=>{
                    this.instance.close();
                },3000)
            },
        }
    }
</script>

<style scoped>

</style>