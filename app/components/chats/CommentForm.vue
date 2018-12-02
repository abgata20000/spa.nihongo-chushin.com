<template>
  <div id="comment-form">
    <textarea-autosize
      placeholder="Type something here..."
      class="textarea comment-form-text"
      ref="commentForm"
      v-model="currentComment"
      :min-height="20"
      :max-height="150"
      rows="1"
      v-on:keypress.native="onEnter($event)"
    ></textarea-autosize>
    <div class="button-wrapper">
      <button class="button submit is-large" @click="send">
      <span class="icon">
        <i class="fa fa-paper-plane"></i>
      </span>
      </button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex"
  import Scrollable from "~/mixins/scrollable"
  export default {
    mixins: [Scrollable],
    components: {
    },
    data() {
      return {
      }
    },
    computed: {
      currentComment: {
        get() {
          return this.$store.getters["comments/currentComment"];
        },
        set(value) {
          this.updateCurrentComment(value);
        }
      },
      ...mapGetters("comments", ["comments"])
    },
    methods: {
      ...mapActions("comments", ["updateComments", "addComment", "updateCurrentComment"]),
      send() {
        if (this.currentComment.trim() === "") {
          return this.resetComment();
        }
        this.postComment();
      },
      onEnter(event) {
        if(event.code !== "Enter") return;
        if (event.shiftKey) return this.addEnterToComment();
        if (this.currentComment.trim() === "") {
          event.preventDefault();
          return this.resetComment();
        }
        this.postComment()
      },
      postComment() {
        const colors = ["color_946c45", "color_9d8e87","color_sienna","color_chocolate","color_peru"];
        let color_class = colors[Math.floor(Math.random() * colors.length)];
        let comment = {id: this.comments.length + 2, body: this.currentComment, nickname: "my name", position: "right", color_class: color_class};
        this.addComment(comment);
        this.resetComment();
        this.scrollToBottom(true);
      },
      resetComment() {
        this.currentComment = "";
      },
      addEnterToComment() {
        this.currentComment += "\n"
      },
    }
  }
</script>
<style scoped lang="scss">
  #comment-form{
    position: fixed;
    bottom: 0;
    left:0 ;
    width: 100%;
    min-height: 54px;
    background: #000;
    color: #FFF;
    display: flex;
  }
  .comment-form-text {
    min-height: 20px;
    min-width: unset;
  }
  .button-wrapper {
    width: 64px;
  }
  .submit {
    position: absolute;
    bottom: 0;
  }
</style>
