<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="age" />
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      name: "jungle",
      sex: "女",
      age: 18,
    };
  },
};
</script>

<style>
</style>