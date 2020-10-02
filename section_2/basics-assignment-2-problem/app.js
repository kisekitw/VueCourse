const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmInput: "",
    };
  },
  methods: {
    saveInput(event) {
      this.userInput = event.target.value;
    },
    enterInput() {
      this.confirmInput = this.userInput;
    },
    showAlert() {
      alert("show alert!!!");
    },
  },
});

app.mount("#assignment");
