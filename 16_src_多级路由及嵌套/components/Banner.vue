<template>
  <div>
    <h1>这个是标题{{ msg }}</h1>
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
};
</script>

<style>
</style>