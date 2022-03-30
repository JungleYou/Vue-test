<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
      <li>a:{{ a }}</li>
      <li>b:{{ b }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
  },
  props: ["a", "b"],
};
</script>

<style>
</style>