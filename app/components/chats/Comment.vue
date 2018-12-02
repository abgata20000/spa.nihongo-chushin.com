<template>
  <div class="comment">
    <figure :class="[commentImageClass]" @click="addMention">
      <img :class="[comment.color_class]" src="https://next.nihongo-chushin.com/images/icon/default.png" />
      <figcaption class="comment-img-description">
        {{comment.nickname}}
      </figcaption>
    </figure>
    <div :class="[commentTextClass, comment.color_class]">
      <p class="comment-text" :class="[comment.color_class]" v-html="comment.body"></p>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    props: {
      comment: Object,
    },
    components: {},
    data() {
      return {}
    },
    computed: {
      commentTextClass() {
        return this.comment.position == "left" ? "comment-text-left" : "comment-text-right";
      },
      commentImageClass() {
        return this.comment.position == "left" ? "comment-img-right" : "comment-img-left";
      },
    },
    methods: {
      addMention() {
        this.addMentionToCurrentComment(this.comment.nickname);
      },
      ...mapActions("comments", ["addMentionToCurrentComment"]),
    }
  }
</script>
<style scoped lang="scss">
  .color {
    background: black;
    color: #FFF;
  }

  .color_9d8e87 {
    background: #9d8e87;
    color: #FFF;
  }

  .color_946c45 {
    background: #946c45;
    color: #FFF;
  }

  .color_peru {
    background: peru;
    color: #FFF;
  }

  .color_chocolate {
    background: chocolate;
    color: #FFF;
  }

  .color_sienna {
    background: sienna;
    color: #FFF;
  }

  .comment {
    margin-bottom: 25px;
  }
  /* 左画像 */
  .comment-img-left {
    margin: 0;
    float: left;
    width: 60px;
    height: 60px;
    margin-right: -70px;
  }
  /* 右画像 */
  .comment-img-right {
    margin: 0;
    float: right;
    width: 60px;
    height: 60px;
    margin-left: -70px;
  }
  .comment figure img {
    width: 100%;
    height: 100%;
    border: 2px solid #aaa;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
  }
  /* 画像の下のテキスト */
  .comment-img-description {
    padding: 5px 0 0;
    font-size: 10px;
    text-align: center;
    position: relative;
    bottom: 5px;
    color: #FFF;
  }
  /* 左からの吹き出しテキスト */
  .comment-text-right {
    position: relative;
    margin-left: 80px;
    padding: 10px;
    border-radius: 10px;
    /* background: #eee;*/
    margin-right: 12%;
    float: left;
  }
  /* 右からの吹き出しテキスト */
  .comment-text-left {
    position: relative;
    margin-right: 80px;
    padding: 10px;
    border-radius: 10px;
    /*background-color: #9cd6e7;*/
    margin-left: 12%;
    float: right;
  }
  p.comment-text {
    margin: 0 0 20px;
    padding: 8px;
  }
  p.comment-text:last-child {
    margin-bottom: 0;
  }
  /* 左の三角形を作る */
  .comment-text-right:before {
    position: absolute;
    content: '';
    border: 10px solid transparent;
    top: 15px;
    left: -20px;
  }
  .comment-text-right:after {
    position: absolute;
    content: '';
    border: 10px solid transparent;
    /*border-right: 10px solid tan;*/
    top: 15px;
    left: -19px;
  }
  /* 右の三角形を作る */
  .comment-text-left:before {
    position: absolute;
    content: '';
    border: 10px solid transparent;
    top: 15px;
    right: -20px;
  }
  .comment-text-left:after {
    position: absolute;
    content: '';
    border: 10px solid transparent;
    /*border-left: 10px solid gray;*/
    top: 15px;
    right: -19px;
  }
  /* 回り込み解除 */
  .comment:after,.comment:before {
    clear: both;
    content: "";
    display: block;
  }
</style>
