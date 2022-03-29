<template>
  <div>
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "苏职大",
      address: "苏州",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("hello", (name, data) => {
      console.log("有人发布了hello消息", name, data);
    });
  },
  beforeDestroy() {
    pubsub.ububscribe(this.pubId);
  },
};
</script>

<style>
</style>