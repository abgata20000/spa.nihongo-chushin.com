import {mapGetters, mapActions} from "vuex"
export default  {
  computed: {
    isHeaderMenuActive: {
      get() {
        return this.$store.getters["isHeaderMenuActive"];
      },
      set(value) {
        this.updateIsHeaderMenuActive(value);
      }
    },
    //...mapGetters(["drawer"])
  },
  methods: {
    selectPage(path) {
      this.$router.push({path: path});
      this.updateIsHeaderMenuActive(false);
    },
    ...mapActions(["updateIsHeaderMenuActive"])
  }
}
