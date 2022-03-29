<template>
  <main>
    <Items />
  </main>
</template>

<script>
import Items from "./Items.vue";
export default {
  name: "Muisc",
  components: { Items },
};
</script>

<style lang='less' scoped>
// todos区域
main {
  width: 100%;
  border: 1px solid rgb(194, 194, 193);
}
</style>