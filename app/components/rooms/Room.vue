<template>
  <div class="room-wrapper card">
    <header class="card-header">
      <p class="card-header-title">
        {{room.room_name}}
      </p>
      <!-- <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </span>
      </a>
      -->
    </header>
    <users :users="room.users"></users>
    <footer class="card-footer">
      <a class="card-footer-item button is-primary is-large" @click="selectPage(`/rooms/${room.id}`)">入室</a>
    </footer>
  </div>
</template>

<script>
  import Users from "~/components/rooms/Users"
  import Navigatable from "~/mixins/navigatable"
  export default {
    mixins: [Navigatable],
    components: {Users},
    props: {
      room: Object,
    },
    computed: {
    },
  }
</script>
<style scoped lang="scss">
  .room-wrapper {
    margin-bottom: 20px;
  }
</style>
