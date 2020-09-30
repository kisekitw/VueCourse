const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finist the course and learn Vue!",
      courseGoalB: "Master Vue and build an app!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
