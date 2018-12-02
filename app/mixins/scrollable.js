export default {
  computed: {},
  methods: {
    scrollToBottom(isForceScroll = false) {
      if (typeof window === 'undefined') return;
      if(!this.isScrollAvailable()) return;
      if (!isForceScroll && !this.isBottom()) return;
      this.$nextTick(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
    },
    isBottom() {
      if (typeof window === 'undefined') return false;
      return (document.body.scrollHeight < (window.scrollY + 1000));
    },
    isScrollAvailable() {
      if (typeof window === 'undefined') return false;
      return (window.outerHeight + 100 < document.body.scrollHeight);
    },
  }
}
