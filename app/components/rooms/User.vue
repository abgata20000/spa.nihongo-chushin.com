<template>
  <div class="media user-wrapper">
    <div class="media-left">
      <figure class="image is-48x48 has-background-black-bis">
        <img :src="`/icon/${user.icon}.png`" alt="avatar">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">{{user.nickname}}</p>
      <p class="subtitle is-6">@{{user.nickname}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    mixins: [],
    components: {},
    props: {
      user: Object,
    },
    computed: {
    },
  }
</script>
<style scoped lang="scss">
  .user-wrapper {
  }
</style>
