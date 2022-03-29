<template>
  <div>
    <input type="text" placeholder="请输入歌名" v-model="music" />
    <button @click="getMusic">获取音乐</button>
    <h1>展示音乐名称和id</h1>
    <ul>
      <li v-for="mus in arr" :key="mus.id">
        音乐名---------{{ mus.name }}
        <audio :src="musicSrc" autoplay></audio>
        <button @click="getUrl(mus.id)">播放音乐</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "student",
  data() {
    return {
      music: "",
      arr: [],
      musicSrc: "",
    };
  },
  methods: {
    getMusic() {
      axios
        .get("http://localhost:3000/search", {
          params: {
            keywords: this.music,
            limit: 5,
          },
        })
        .then((res) => {
          console.log(res.data.result.songs);
          this.arr = res.data.result.songs;
          // console.log(this.arr);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getUrl(musid) {
      axios
        .get("http://localhost:3000/song/url", {
          params: {
            id: musid,
            br: "320000",
          },
        })
        .then((res) => {
          console.log(res);
          this.musicSrc = res.data.data[0].url;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style>
</style>