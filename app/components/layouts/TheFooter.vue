<template>
  <footer class="footer has-text-white-bis has-background-black-bis" v-show="true">
    <div class="content has-text-centered">
      <p>
        &copy; {{ new Date().getFullYear() }} — <span></span>abgata20000</span>
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
  .footer {
    padding: 10px 0;
  }
</style>
