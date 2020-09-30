const app = Vue.createApp({
  data() {
    return {
      name: "Xavier Lin",
      age: 35,
      imageURL:
        "https://elt.rti.org.tw/wp-content/uploads/2018/09/960x540_bbc-lingohack-gaspard-the-friendly-fox-.jpg",
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
    calulateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
