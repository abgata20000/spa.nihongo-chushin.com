<template>
  <div id="users">
    <user v-for="user in users" :key="user.id" :user="user"></user>
  </div>
</template>

<script>
  import User from "~/components/chats/User"

  export default {
    props: {
      users: Array,
    },
    components: {
      User,
    },
    data() {
      return {}
    }
  }
</script>
<style scoped lang="scss">
  #users {
    overflow-y: scroll;
    max-height: 300px;
  }
</style>
