<template>
  <div>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="请输入名字(回车确认）"
      v-model.trim="name"
      @keyup.enter="addper(name)"
    />
    <button>添加</button>
    <ul>
      <li v-for="per in personList" :key="per.id">{{ per.name }}</li>
    </ul>
    <h1>上方总和为{{ sum }}</h1>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addper(data) {
      if (data) {
        const personObj = { id: nanoid(), name: this.name };
        this.$store.commit("ADD_PER", personObj);
        this.name = "";
      }
    },
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
};
</script>

<style>
</style>