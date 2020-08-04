<template>
    <div>
      <ul>
        <li v-for="message in messages" :key="message.id">
<!--          <a :href="'detil/'+message.id">{{message.title}}</a>-->
          <router-link :to="'/home/message/detail/'+message.id">{{message.title}}</router-link>
<!--          <router-link :to="'/home/message/detail?id='+message.id">{{message.title}}</router-link>-->
          <button @click="pushShow(message.id)">push查看</button>
          <button @click="replaceShow(message.id)">replace查看</button>
        </li>
      </ul>
      <button @click="$router.back()">回退back</button>
      <button @click="$router.go(-1)">回退go(-1)</button>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      messages: []
    }
  },
  methods: {
    pushShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/home/message/detail/${id}`)
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message001'
        },
        {
          id: 3,
          title: 'message003'
        },
        {
          id: 5,
          title: 'message005'
        },
        {
          id: 4,
          title: 'message004'
        }
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style scoped>

</style>
