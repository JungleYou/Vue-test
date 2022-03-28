<template>
  <div>
    <Student name="张三" :age="19" />
    <hr />
    <Student name="李四" address="上海" :age="18" />
    <hr />
    <Student name="王五" address="苏州" :age="29" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
  data() {
    return {};
  },
};
</script>

<style>
</style>