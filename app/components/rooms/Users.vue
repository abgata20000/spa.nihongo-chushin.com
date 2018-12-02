<template>
  <div class="card-content users-wrapper">
    <user v-for="user in users" :key="user.id" :user="user">
    </user>
  </div>
</template>

<script>
  import User from "~/components/rooms/User"
  export default {
    mixins: [],
    components: {User},
    props: {
      users: Array,
    },
    computed: {
    },
  }
</script>
<style scoped lang="scss">
  .users-wrapper {
  }
</style>
