<template>
  <div class="form">
    <div class="field">
      <label class="label">部屋名</label>
      <div class="control">
        <input class="input" type="text" placeholder="部屋名を入力してください" v-model="room.name">
      </div>
    </div>
    <div class="field">
      <label class="label">人数</label>
      <div class="control">
        <div class="select">
          <select v-model="room.num">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="submit">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text" @click="cancel">Cancel</button>
      </div>
    </div>
    <div class="notification is-danger" v-show="errors.length > 0">
      <p v-for="error in errors" :key="error">{{error}}</p>
    </div>
  </div>
</template>

<script>
  import Navigatable from "~/mixins/navigatable"


  const CREATE_PATH = "/rooms";

  export default {
    mixins: [Navigatable],
    components: {},
    props: {
      setRoom: Object,
    },
    data() {
      return {
        room: {
          id: null,
          name: "",
          num: 2,
        },
        errors: [],
      }
    },
    computed: {},
    methods: {
      async submit() {
        let result = null;
        if (this.room.id) {
          result = await this.update();
        } else {
          result = await this.create();
        }
        if(!result.errors) {
          this.errors = [];
          this.$router.push({path: "/rooms"});
        } else {
          this.errors = result.errors;
        }
      },
      async create() {
          return await this.$axios.$post(CREATE_PATH, this.room);
      },
      update() {

      },
      cancel() {
        this.selectPage("/")
      },
    },
    created() {
      if (!this.setRoom) return;
      console.log(this.setRoom);
      this.room = {...this.room, ...this.setRoom};
    },
  }
</script>
<style scoped lang="scss">
</style>
