<template>
  <main v-show="todos.length">
    <Items :todos="todos" />
  </main>
</template>

<script>
import Items from "./Items.vue";
export default {
  name: "Todos",
  components: {
    Items,
  },
  props: ["todos"],
};
</script>

<style lang='less' scoped>
// todos区域
main {
  width: 100%;
  border: 1px solid rgb(194, 194, 193);
}
</style>