<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your Name" v-model="enterName" />
      <input type="text" placeholder="Your Age" v-model="enterAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enterName: "",
      enterAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enterName, this.enterAge);
    },
  },
};
</script>
