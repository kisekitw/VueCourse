const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClassed() {
      return { active: this.boxASelected };
    },
    boxBClassed() {
      return { active: this.boxBSelected };
    },
    boxCClassed() {
      return { active: this.boxCSelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box == "A") {
        console.log("A");
        this.boxASelected = !this.boxASelected;
      } else if (box == "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box == "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
