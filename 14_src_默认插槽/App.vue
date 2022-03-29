<template>
  <div class="content">
    <Category title="美食">
      <img src="./assets/logo.png" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video src="" controls></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排", "鸡蛋"],
      games: ["联盟", "英雄", "荣耀", "王者", "吃鸡"],
      films: ["尚硅谷", "你好", "jungle", "吃饭", "睡觉"],
    };
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>