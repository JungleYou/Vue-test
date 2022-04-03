<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>学校为：{{ school }}</h1>
    <h1>学课为：{{ subject }}</h1>
    <h1>当前求和扩大十倍：{{ bigSum }}</h1>
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
    // add() {
    //   this.$store.commit("JIA", this.n);
    // },
    // jian() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // mapActions的使用对象写法
    // ...mapMutations({
    //   jia: "JIA",
    //   jian: "JIAN",
    // }),

    // mapMutations数组写法
    ...mapMutations(["JIA", "JIAN"]),

    // --------------------------------------------
    // oddadd() {
    //   this.$store.dispatch("odd", this.n);
    // },
    // waitadd() {
    //   this.$store.dispatch("wait", this.n);
    // },
    ...mapActions({
      oddadd: "odd",
      waitadd: "wait",
    }),
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
};
</script>

<style>
</style>