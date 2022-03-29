<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      {{ todo.name }}
      <button @click="handleDelete(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Items",
  props: ["todos"],
  methods: {
    handleCheck(id) {
      // this.changeCheck(id);
      this.$bus.$emit("changeCheck", id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.deleteItems(id);
        this.$bus.$emit("deleteItems", id);
      }
    },
  },
};
</script>

<style lang='less' scoped>
ul {
  box-sizing: border-box;
  width: 100%;
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(194, 194, 193);
    &:hover {
      background-color: rgb(187, 187, 187);
    }
    &:hover button {
      display: block;
      cursor: pointer;
    }
    input {
      margin: 0 10px;
      cursor: pointer;
    }
    button {
      float: right;
      background-color: rgb(233, 43, 43);
      width: 50px;
      height: 30px;
      border: 0px;
      color: white;
      display: none;
      border-radius: 5px;
    }
  }
}
</style>