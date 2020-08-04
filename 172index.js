var vm = new Vue({
    el:'#app',
    data:{
        num:5
    },
    methods:{
        handInput(str){
            this.num=str
        }
    }
})
