<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h2>学校为：{{ school }}</h2>
    <h3>学课为：{{ subject }}</h3>
    <h4>当前求和扩大十倍：{{ bigSum }}</h4>
    <h2>下方列表总人数为{{ personList.length }}</h2>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="oddadd(n)">当前和为奇数加</button>
    <button @click="waitadd(n)">等等加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Sum",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapMutations(["JIA", "JIAN"]),
    ...mapActions({
      oddadd: "odd",
      waitadd: "wait",
    }),
  },
  computed: {
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
</style>