<template>
  <div>
    <Banner />
    <router-link to="/student" active-class="active">点我查看学生</router-link>
    <router-link to="/school" active-class="active">点我进入学校</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Banner,
  },
};
</script>

<style>
a {
  display: inline-block;
  text-decoration: none;
  margin-right: 20px;
  color: black;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
}
.active {
  color: white;
  background-color: rgb(180, 39, 39);
}
</style>