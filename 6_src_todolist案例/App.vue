<template>
  <div>
    <div id="root">
      <Add :addTodos="addTodos" />
      <Todos
        :todos="todos"
        :changeCheck="changeCheck"
        :deleteItems="deleteItems"
      />
      <Sum :todos="todos" :checkAllTodo="checkAllTodo" :clearAll="clearAll" />
    </div>
  </div>
</template>

<script>
import Add from "../6_src_todolist案例/components/Add.vue";
import Todos from "../6_src_todolist案例/components/Todos.vue";
import Sum from "../6_src_todolist案例/components/Sum.vue";
import { nanoid } from "nanoid";
export default {
  name: "App",
  data() {
    return {
      // todos: [
      //   { id: "001", name: "吃饭", done: true },
      //   { id: "002", name: "睡觉", done: false },
      //   { id: "003", name: "打豆豆", done: true },
      // ],
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 1.添加待办事项
    addTodos(value) {
      // 将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), name: value, done: false };
      this.todos.unshift(todoObj);
    },
    // 2.切换选中状态
    changeCheck(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 3.删除todo事项
    deleteItems(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 4.全选或者取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 5.清除已完成的任务
    clearAll() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  components: {
    Add,
    Todos,
    Sum,
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
#root {
  box-sizing: border-box;
  width: 600px;
  border: 2px solid rgb(194, 194, 193);
  margin: 100px auto;
  padding: 20px;
  li {
    margin: 0;
    list-style: none;
  }
}
</style>