const app = Vue.createApp({
  data() {
    return {
      firstNum: "",
      secondNum: "",
      count: 0,
      result: "",
    };
  },
  watch: {
    count(value) {
      //   const that = this;
      if (value > 37) {
        setTimeout(() => {
          this.count = 0;
        }, 5000);
      }
    },
  },
  computed: {
    showResult() {
      console.log("computed");
      if (this.count < 37) {
        return "Not there yet!";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    plusFive() {
      this.count = this.count + 5;
    },
    plusOne() {
      this.count = this.count + 1;
    },
  },
});

app.mount("#assignment");
