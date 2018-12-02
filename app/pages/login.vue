<template>
  <div class="section">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="name" v-model="nickname">
      </div>
    </div>

    <icons></icons>

    <button class="button is-link is-large is-fullwidth" @click="login">Login</button>
    <br />
    <div class="notification is-danger" v-show="errors.length > 0">
      <p v-for="error in errors" :key="error">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex"
  import Cookies from "universal-cookie";
  import Icons from "~/components/icons/Icons";

  const LOGIN_PATH = "/sessions";
  const REDIRECT_PATH = "/rooms";

  export default {
    components: {Icons},
    asyncData({redirect, store}) {
      return {
        nickname: "",
        errors: [],
      }
    },
    computed: {
      ...mapGetters("icons", ["selectedIcon"]),
      ...mapGetters(["userSession"]),
    },
    methods: {
      ...mapActions(["loggedIn"]),
      async login() {
        const cookies = new Cookies();
        const userSession = await this.$axios.$post(LOGIN_PATH, this.loginParams());
        if(!userSession.errors) {
          this.errors = [];
          cookies.set("userToken", userSession.token);
          this.loggedIn(userSession);
          this.$router.push({path: REDIRECT_PATH});
        } else {
          this.errors = userSession.errors;
        }
      },
      loginParams() {
        return {
          icon: this.selectedIcon.name,
          nickname: this.nickname,
        }
      },
    }
  }
</script>
<style scoped lang="scss">
</style>
