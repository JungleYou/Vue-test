<template>
  <div>
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "苏职大",
      address: "苏州",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>