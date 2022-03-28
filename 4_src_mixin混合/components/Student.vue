<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
// 引入一个mixin混合
import { mixin } from "../mixin";
import { mixin2 } from "../mixin";
export default {
  name: "student",
  data() {
    return {
      name: "jungle",
      sex: "女",
    };
  },
  mixins: [mixin,mixin2],
};
</script>

<style>
</style>