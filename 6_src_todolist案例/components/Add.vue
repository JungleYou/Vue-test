<template>
  <header>
    <input
      type="text"
      placeholder="请添加待办事项（回车确认）"
      @keyup.enter="add"
    />
  </header>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {};
  },
  props: ["addTodos"],
  methods: {
    add(e) {
      if (!e.target.value.trim()) {
        alert("输入不能为空");
      } else {
        this.addTodos(e.target.value);
        e.target.value = "";
      }
    },
  },
};
</script>

<style lang='less' scoped>
// 搜索区域
header {
  input {
    width: 100%;
    height: 30px;
    outline: none;
    text-indent: 1em;
    border: 2px solid rgb(194, 194, 193);
  }
  margin-bottom: 15px;
}
</style>