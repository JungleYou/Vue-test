<template>
  <div>
    <h1>{{ msg }}</h1>
    <School></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "app标签",
    };
  },
  components: { School },
};
</script>

<style>
</style>