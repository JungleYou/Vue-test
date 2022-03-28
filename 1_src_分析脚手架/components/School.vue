<template>
  <div>
    <h1>hello {{ msg }}</h1>
    <Student />
  </div>
</template>

<script>
import Student from "./Student.vue";
export default {
  name: "school",
  data() {
    return {
      msg: "world!",
    };
  },
  components: { Student },
};
</script>

<style>
</style>