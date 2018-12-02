<template>
  <div id="rooms">
    <room class="room-wrapper card" v-for="room in rooms" :key="room.id" :room="room">
    </room>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import Navigatable from "~/mixins/navigatable"
  import Room from "~/components/rooms/Room"
  const ROOMS_PATH = "/rooms";
  export default {
    mixins: [Navigatable],
    components: {Room},
    computed: {
      ...mapGetters("rooms", ["rooms"]),
    },
  }
</script>
<style scoped lang="scss">
  #rooms {
  }
</style>
