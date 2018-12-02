<template>
  <header>
    <nav class="navbar is-black is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" @click="selectPage('/')">
          <img src="/logo/logo.png">
        </a>
        <div class="navbar-burger burger" v-bind:class="{ 'is-active': isHeaderMenuActive }" @click="toggleMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div class="navbar-menu" v-bind:class="{ 'is-active': isHeaderMenuActive }">
        <div class="navbar-start">
          <a class="navbar-item" @click="selectPage('/rooms')">
            Rooms
          </a>

          <a class="navbar-item" @click="selectPage('/rooms/new')">
            New Room
          </a>

          <a class="navbar-item" @click="selectPage('/chats')">
            Chats
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <figure class="image is-32x32 has-background-black-bis">
                <img src="https://next.nihongo-chushin.com/images/icon/default.png" alt="avatar">
              </figure>
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item" @click="selectPage('/myPage')">
                My Page
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">
                Logout
              </a>
            </div>
          </div>


          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" @click="selectPage('login')">
                <strong>Log in</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  import Navigatable from "~/mixins/navigatable"

  export default {
    mixins: [Navigatable],
    data() {
      return {
        menuActive: false,
      }
    },
    methods: {
      toggleMenu() {
        this.updateIsHeaderMenuActive(!this.isHeaderMenuActive);
      },
      logout() {
        this.updateIsHeaderMenuActive(false);
        console.log("click logout");
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
