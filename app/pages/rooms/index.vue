<template>
  <rooms></rooms>
</template>

<script>
  import Rooms from "~/components/rooms/Rooms";
  export default {
    mixins: [],
    components: {Rooms},
    async asyncData({store}) {
      await store.dispatch("rooms/fetchRooms");
      return {};
    },
  }
</script>
<style scoped lang="scss">
</style>
