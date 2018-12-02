<template>
  <div id="rooms">
    <div class="card" v-for="room in [1,2,3]" :key="room">
      <header class="card-header">
        <p class="card-header-title">
          部屋(1/5)
        </p>
        <!-- <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </span>
        </a>
        -->
      </header>
      <div class="card-content">
        <div class="media" v-for="user in [1,2,3]" :key="user">
          <div class="media-left">
            <figure class="image is-48x48 has-background-black-bis">
              <img src="https://next.nihongo-chushin.com/images/icon/default.png" alt="avatar">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item button is-primary is-large" @click="selectPage(`/rooms/${room}`)">入室</a>
      </footer>
    </div>
  </div>
</template>

<script>
  import Navigatable from "~/mixins/navigatable"
  export default {
    mixins: [Navigatable],
    components: {},
    asyncData() {
      return {
        rooms: [
          {id: 1, name: 'Pre-fab homes'},
          {id: 2, name: 'Favorite road trips'},
          {id: 3, name: 'Best airlines'}
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  #rooms {
  }
</style>
