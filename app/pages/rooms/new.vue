<template>
  <div class="section">
    <h1 class="title">New Room</h1>
    <room-form></room-form>
  </div>
</template>

<script>
  import RoomForm from "~/components/rooms/RoomForm";
  export default {
    mixins: [],
    components: {
      RoomForm,
    }
  }
</script>
<style scoped lang="scss">
</style>
