<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="send">点我发布订阅</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style>
</style>