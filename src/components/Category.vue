<template>
  <div class="category">
    <h1>{{ title }}分类</h1>
    <slot></slot>
  </div>
</template>
    
<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
* {
  margin: 0;
}
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
li {
  list-style: none;
}
h1 {
  text-align: center;
  background-color: aqua;
}
</style>