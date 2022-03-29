<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="send">发送学生信息</button>
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
    send() {
      this.$bus.$emit("jungle", this.name, 1, 2, 3, 4);
    },
  },
};
</script>

<style>
</style>