<template>
  <div>
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "苏职大",
      address: "苏州",
    };
  },
  mounted() {
    this.$bus.$on("jungle", (data, ...a) => {
      console.log("我是school组件，我收到了数据：", data, ...a);
    });
  },
};
</script>

<style>
</style>