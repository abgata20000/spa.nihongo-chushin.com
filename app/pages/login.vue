<template>
  <div class="section">
    <h1 class="title">Login</h1>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>

    <icons></icons>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Icons from "~/components/icons/Icons";

  export default {
    components: {Icons},
  }
</script>
<style scoped lang="scss">
</style>
