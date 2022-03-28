<template>
  <div>
    <h1>学校名：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "school",
  data() {
    return {
      name: "苏职大",
      address: "苏州",
    };
  },
};
</script>

<style>
</style>