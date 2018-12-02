<template>
  <li class="icon-wrapper" @click="selectIcon(icon)">
    <figure class="image is-48x48 has-background-black-bis" :class="{selected: isSelected()}">
      <img :src="icon.path()" alt="avatar">
    </figure>
  </li>
</template>

<script>

  export default {
    props: {
      icon: Object,
      selectedIcon: Object,
      selectIcon: Function,
    },
    data() {
      return {}
    },
    methods: {
      isSelected() {
        return this.icon.name === this.selectedIcon.name;
      }
    }
  }
</script>
<style scoped lang="scss">
  .icon-wrapper {
    cursor: pointer;
    display: inline-block;
    margin: 3px;
  }
  .selected {
    border: solid 2px red;
  }
</style>
