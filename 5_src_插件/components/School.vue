<template>
  <div>
    <h2>学校姓名：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "苏职大苏州市",
      address: "苏州",
    };
  },
};
</script>

<style>
</style>