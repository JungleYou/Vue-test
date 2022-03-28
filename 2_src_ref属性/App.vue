<template>
  <div>
    <h1 v-text="msg" ref="demo"></h1>
    <button @click="show">点我输出上方元素的dom</button>
    <hr />
    <School ref="sch" />
    <hr />
    <School />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "hello world !",
    };
  },
  methods: {
    show() {
      console.log(this.$refs.demo);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>