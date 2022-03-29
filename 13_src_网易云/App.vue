<template>
  <div id="root">
    <Search />
    <Music />
    <Sum />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Music from "./components/Music.vue";
import Sum from "./components/Sum.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Search,
    Music,
    Sum,
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