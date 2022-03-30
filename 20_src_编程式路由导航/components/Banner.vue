<template>
  <div>
    <h1>这个是标题{{ msg }}</h1>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      msg: "路由",
    };
  },
  methods: {
    forward() {
      this.$router.forward();
      // console.log(this.$router);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style>
</style>