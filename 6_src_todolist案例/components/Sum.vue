<template>
  <footer v-show="todos.length">
    <input
      type="checkbox"
      :checked="isAll"
      ref="checkAll"
      @change="checkAll"
    /><span>已完成{{ doneSum }}/全部{{ todos.length }}</span>
    <button @click="clear">清除已经完成的任务</button>
  </footer>
</template>

<script>
export default {
  name: "Sum",
  props: ["todos", "checkAllTodo", "clearAll"],
  methods: {
    checkAll() {
      // console.log(this.$refs.checkAll.checked);
      this.checkAllTodo(this.$refs.checkAll.checked);
    },
    clear() {
      if (confirm("确定要清除全部已完成任务吗？")) {
        this.clearAll();
      }
    },
  },
  computed: {
    // 1.第一种forEach遍历方法
    // doneSum() {
    //   let i = 0;
    //   this.todos.forEach((todo) => {
    //     if (todo.done) {
    //       i++;
    //     }
    //   });
    //   return i;
    // },
    // 2.第二种reduce统计方法
    doneSum() {
      const x = this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
      return x;
    },
    isAll() {
      return this.doneSum == this.todos.length && this.todos.length > 0;
    },
  },
};
</script>

<style lang='less' scoped>
// footer区域
footer {
  margin-top: 20px;
  input {
    margin-right: 20px;
  }
  button {
    float: right;
    width: 130px;
    height: 30px;
    color: white;
    border: 0px;
    border-radius: 5px;
    background-color: rgb(235, 49, 49);
  }
}
</style>