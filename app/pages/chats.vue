<template>
  <div class="chats">
    <room></room>
    <comments></comments>
    <comment-form></comment-form>
  </div>
</template>

<script>
  import Room from "~/components/chats/Room"
  import Comments from "~/components/chats/Comments"
  import CommentForm from "~/components/chats/CommentForm"

  export default {
    mixins: [],
    components: {
      Room,
      Comments,
      CommentForm,
    }
  }
</script>
<style scoped lang="scss">
  .chats {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
