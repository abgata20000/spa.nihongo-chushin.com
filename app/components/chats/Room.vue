<template>
  <div class="card room">
    <header class="card-header">
      <p class="card-header-title">
        {{room.name}}
      </p>
      <a class="card-header-icon" aria-label="more users" v-show="!isShowUsers" @click="toggleIsShowUsers">
        <span class="icon">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
      <a class="card-header-icon" aria-label="close users" v-show="isShowUsers" @click="toggleIsShowUsers">
        <span class="icon">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content" v-if="isShowUsers">
      <users :users="room.users"></users>
    </div>
  </div>
</template>

<script>
  import Users from "~/components/chats/Users"
  export default {
    components: {
      Users,
    },
    data() {
      return {
        isShowUsers: false,
        room: {
          name: "my room",
          users: [
            {id: 1, name: "aaa"},
            {id: 2, name: "bbbb"},
            {id: 3, name: "ccccc"},
            {id: 4, name: "dddddd"},
            {id: 5, name: "dddddd"},
            {id: 6, name: "dddddd"},
            {id: 7, name: "dddddd"},
            {id: 8, name: "dddddd"},
            {id: 9, name: "dddddd"},
            {id: 10, name: "dddddd"},
          ]
        },

      }
    },
    methods: {
      toggleIsShowUsers() {
        this.isShowUsers = !this.isShowUsers;
      },

    }
  }
</script>
<style scoped lang="scss">
  .room {
    position: fixed;
    top: 52px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
</style>
