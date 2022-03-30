<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      name: "江狗狗",
      sex: "女",
    };
  },
};
</script>

<style>
</style>