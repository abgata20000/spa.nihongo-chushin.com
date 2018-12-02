<template>
  <div class="site-content-all">
    <the-header></the-header>
    <the-content class="site-content">
      <nuxt></nuxt>
    </the-content>
    <the-footer></the-footer>
  </div>
</template>

<script>
  import TheHeader from "~/components/layouts/TheHeader";
  import TheContent from "~/components/layouts/TheContent";
  import TheFooter from "~/components/layouts/TheFooter";

  export default {
    components: {
      TheHeader,
      TheContent,
      TheFooter,
    },
    data() {
      return {
      }
    },
    props: {
      source: String
    }
  }
</script>

<style scoped lang="scss">
  html {
    font-family: sans-serif;
  }
  .site-content-all {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .site-content {
    padding-top: 52px;
    flex: 1;
  }
</style>
