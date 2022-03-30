<template>
  <div class="demo">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <div class="demo2">
      <router-link to="/school/news" active-class="active">News</router-link>
      <router-link to="/school/msg" active-class="active">msg</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "苏职大",
      address: "苏州",
    };
  },
};
</script>

<style>
.demo {
  margin-left: 50px;
}
.demo2 {
  margin-left: 50px;
}
</style>