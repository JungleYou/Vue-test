<template>
  <main v-show="todos.length">
    <Items
      :todos="todos"
      :changeCheck="changeCheck"
      :deleteItems="deleteItems"
    />
  </main>
</template>

<script>
import Items from "./Items.vue";
export default {
  name: "Todos",
  components: {
    Items,
  },
  props: ["todos", "changeCheck", "deleteItems"],
};
</script>

<style lang='less' scoped>
// todos区域
main {
  width: 100%;
  border: 1px solid rgb(194, 194, 193);
}
</style>