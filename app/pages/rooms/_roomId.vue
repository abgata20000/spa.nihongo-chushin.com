<template>
</template>

<script>
  export default {
    beforeCreate() {
      const path = "/chats";
      // console.log(this.$route.params);
      this.$router.push({path: path});
    },
  }
</script>

