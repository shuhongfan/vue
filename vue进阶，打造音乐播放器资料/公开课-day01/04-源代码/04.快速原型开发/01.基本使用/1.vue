<template>
    <div id="app" class="app">
        app
        <ul>
            <li v-for="item in food" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import './css/base.css'
    export default {
        data(){
          return{
              food:['黑马','防守打法']
          }
        },
        methods:{
            sayHello(){
                console.log('大家好')
            }
        }
    }
</script>

<style>
    #app{
        background-color: #bfa;
    }
</style>
