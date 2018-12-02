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
        <div class="navbar-start" v-show="isLoggedIn">
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
            <a class="navbar-link" v-show="isLoggedIn">
              <figure class="image is-32x32 has-background-black-bis">
                <img :src="iconPath()" alt="avatar">
              </figure>
            </a>

            <div class="navbar-dropdown" v-show="isLoggedIn">
              <a class="navbar-item" @click="selectPage('/myPage')">
                My Page
              </a>
              <hr class="navbar-divider" v-show="isLoggedIn">
              <a class="navbar-item" @click="logout">
                Logout
              </a>
            </div>
          </div>


          <div class="navbar-item" v-show="!isLoggedIn">
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
  import {mapGetters, mapActions} from "vuex"
  import Navigatable from "~/mixins/navigatable";
  import iconGenerator from "~/libs/iconGenerator";
  const LOGOUT_PATH = "/sessions";
  const REDIRECT_PATH = "/login";

  export default {
    mixins: [Navigatable],
    data() {
      return {
        menuActive: false,
      }
    },
    computed: {
      ...mapGetters(["userSession", "isLoggedIn"]),
    },
    methods: {
      ...mapActions(["loggedOut"]),
      toggleMenu() {
        this.updateIsHeaderMenuActive(!this.isHeaderMenuActive);
      },
      logout() {
        this.updateIsHeaderMenuActive(false);
        this.loggedOut();
        this.$axios.$delete(LOGOUT_PATH);
        this.$router.push({path: REDIRECT_PATH});
      },
      iconPath() {
        if(!this.userSession) return;
        const icon = new iconGenerator(this.userSession.icon);
        return icon.path();
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
