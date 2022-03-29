<template>
  <header>
    <input
      type="text"
      placeholder="搜索歌曲(回车确认)"
      v-model="musicName"
      @keyup.enter="searchMusic"
    />
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",

  // 1.components
  // 2.props
  // 3.data
  data() {
    return {
      musicName: "",
      musicAlbum: [],
      musicId: "",
    };
  },
  // 5.mounted
  // 8.methods
  methods: {
    searchMusic() {
      axios
        .get("http://cloud-music.pl-fe.cn/search", {
          params: {
            keywords: this.musicName,
            limit: 20,
          },
        })
        .then((res) => {
          this.musicAlbum = res.data.result.songs;
          this.$bus.$emit("getMusicAlbum", this.musicAlbum);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // 11.conputed
  // 12.watch
};
</script>

<style lang='less' scoped>
// 搜索区域
header {
  input {
    width: 100%;
    height: 30px;
    outline: none;
    text-indent: 1em;
    border: 2px solid rgb(194, 194, 193);
  }
  margin-bottom: 15px;
}
</style>