<template>
  <div class="comments-wrapper">
    <comment v-for="comment in comments" :key="comment.id" :comment="comment"></comment>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex"
  import Comment from "~/components/chats/Comment"
  import Scrollable from "~/mixins/scrollable"

  export default {
    mixins: [Scrollable],
    components: {
      Comment,
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters("comments", ["comments"])
    },
    methods: {
      ...mapActions("comments", ["updateComments", "addComment"])
    },
    created() {
      const positions = ["right", "left"];
      const colors = ["color_946c45", "color_9d8e87","color_sienna","color_chocolate","color_peru"];
      let tmpComments = [];
      let n = 0;
      for (let i = 0; i < 100; i++) {
        let position = positions[Math.floor(Math.random() * positions.length)];
        let color_class = colors[n];
        n++;
        if(n > colors.length - 1) n = 0;
        let body = "あいうえおかきくけこさしすせそたちつてとなにぬねの".repeat(1 + Math.floor(Math.random() * Math.floor(5)));
        tmpComments.push(
          {id: i + 1, body: body + i, nickname: "my name", position: position, color_class: color_class}
        );
        //対象データへのアクセスは data[i] の様な形式
      }
      //
      this.updateComments(tmpComments);
      this.scrollToBottom(true);
    }
  }
</script>
<style scoped lang="scss">
  .comments-wrapper {
    background: #000;
    min-height: 100vh;
    min-width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 55px;
    padding-bottom: 20px;
    padding-left: 5px;
    padding-right: 5px;
    color: #FFF;
  }
</style>
