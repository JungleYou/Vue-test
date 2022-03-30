<template>
  <div>
    <h3>News组件</h3>
    <ul>
      <li :style="{ opacity }">欢迎学习vue</li>
      <li>001 <input type="text" /></li>
      <li>002 <input type="text" /></li>
      <li>003 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  beforeDestroy() {
    console.log("news被销毁了");
  },
  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 20);
    console.log("News组件被激活了");
  },
  deactivated() {
    clearInterval(this.timer);
    console.log("News组件失活了");
  },
};
</script>

<style>
</style>