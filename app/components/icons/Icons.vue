<template>
  <div class="icons-wrapper">
    <ul class="icons">
      <icon v-for="icon in icons" :icon="icon" :selected-icon="selectedIcon" :select-icon="selectIcon"
            :key="icon.name"></icon>
    </ul>
  </div>
</template>

<script>
  import arrayShuffle from "~/libs/arrayShuffle";
  import Icon from "~/components/icons/Icon";
  import IconGenerator from "~/libs/iconGenerator";

  const icons = IconGenerator.generateIcons();
  import {mapGetters, mapActions} from "vuex"

  export default {
    components: {
      Icon,
    },
    data() {
      return {
        defaultIcons: icons,
        icons: [],
      }
    },
    computed: {
      ...mapGetters("icons", ["selectedIcon"]),
    },
    methods: {
      ...mapActions("icons", ["updateSelectedIcon"]),
      shuffleIcons() {
        return this.icons = arrayShuffle(this.defaultIcons);
      },
      selectIcon(icon) {
        this.updateSelectedIcon(icon);
      }
    },
    created() {
      this.shuffleIcons();
      this.selectIcon(this.icons[0]);
    }
  }
</script>
<style scoped lang="scss">
  .icons-wrapper {
    height: 300px;
    overflow-y: scroll;
  }
</style>
