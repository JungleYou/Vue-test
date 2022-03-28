<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名传给app</button>
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
  methods: {
    sendStudentName() {
      this.$emit("jungle", this.name);
    },
  },
};
</script>

<style>
</style>