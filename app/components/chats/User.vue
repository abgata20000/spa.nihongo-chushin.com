<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48 has-background-black-bis">
        <img src="https://next.nihongo-chushin.com/images/icon/default.png" alt="avatar">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">{{user.name}}</p>
      <p class="subtitle is-6">@{{user.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user: Object,
    },
    components: {
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
</style>
