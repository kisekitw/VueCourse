<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Age</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    userage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
