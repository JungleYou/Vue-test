<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="jian">-</button>
    <button @click="oddadd">当前和为奇数加</button>
    <button @click="waitadd">等等加</button>
  </div>
</template>

<script>
export default {
  name: "Sum",
  data() {
    return {
      n: 1,
      sum: 0,
    };
  },
  methods: {
    add() {
      this.sum += this.n;
    },
    jian() {
      this.sum -= this.n;
    },
    oddadd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    waitadd() {
      setTimeout(() => {
        this.sum += this.n;
      }, 2000);
    },
  },
};
</script>

<style>
</style>