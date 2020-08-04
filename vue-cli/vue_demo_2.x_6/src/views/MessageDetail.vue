<template>
    <div>
      ID:{{this.$route.params.id}}
      <ul>
        <li>id:{{messageDetails.id}}</li>
        <li>title:{{messageDetails.title}}</li>
        <li>content:{{messageDetails.content}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data () {
    return {
      messageDetails: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessagesDetails = [
        {
          id: 1,
          title: 'message001',
          content: 'message001 content'
        },
        {
          id: 3,
          title: 'message003',
          content: 'message003 content'
        },
        {
          id: 5,
          title: 'message005',
          content: 'message005 content'
        },
        {
          id: 4,
          title: 'message004',
          content: 'message004 content'
        }
      ]
      this.allMessagesDetails = allMessagesDetails
      const id = this.$route.params.id * 1
      this.messageDetails = allMessagesDetails.find(detail => detail.id === id)
      console.log(this.messageDetails)
    }, 1000)
  },
  watch: {
    $route (value) {
      console.log(value)
      const id = value.params.id * 1
      this.messageDetails = this.allMessagesDetails.find(detail => detail.id === id)
    }
  }
}
</script>

<style scoped>

</style>
