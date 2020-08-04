<template>
  <div>
<!--    <p>click {{$store.state.count}} times, count is {{evenOrOdd}}</p>-->
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    // evenOrOdd () {
    //   return this.$store.getters.evenOrOdd
    // },
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd', { eventodd: 'evenOrOdd' }])
  },
  methods: {
    // increment () {
    //   // this.count++
    //   this.$store.dispatch('increment')
    // },
    // decrement () {
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd () {
    //   // if (this.count % 2 === 1) {
    //   //   this.count++
    //   // }
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync () {
    //   // setTimeout(() => {
    //   //   this.count++
    //   // }, 1000)
    //   this.$store.dispatch('incrementAsync')
    // }
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
}
</script>

<style scoped>
</style>
