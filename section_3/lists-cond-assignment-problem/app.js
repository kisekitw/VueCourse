const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      inputedTask: "",
      taggle: true,
    };
  },
  computed: {
    taggle() {
      return !this.taggle;
    },
    taggleShow() {
      if (this.taggle) {
        return "Show List";
      } else {
        return "Hide List";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputedTask);
    },
    doTaggle() {
      this.taggle = !this.taggle;
    },
  },
});

app.mount("#assignment");
