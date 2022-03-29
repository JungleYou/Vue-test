<template>
  <ul>
    <li v-for="music in itemMusicAlbum" :key="music.id">
      <span>{{ music.name }}</span>
      <audio :src="musicSrc" ref="play"></audio>
      <button @click="playMusic(music.id)">播放</button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Items",
  data() {
    return {
      itemMusicAlbum: [],
      musicSrc: "",
      musicPlay: true,
    };
  },
  mounted() {
    this.$bus.$on("getMusicAlbum", (musicAlbum) => {
      // console.log("items", musicAlbum);
      this.itemMusicAlbum = musicAlbum;
    });
  },
  methods: {
    playMusic(musicId) {
      axios
        .get("http://cloud-music.pl-fe.cn/song/url", {
          params: {
            id: musicId,
            br: 320000,
          },
        })
        .then((res) => {
          this.musicSrc = res.data.data[0].url;
          this.musicPlay = this.$refs.play[0].paused;
          console.log(this.musicPlay);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeDestroy() {
    this.$bus.$off("getMusicAlbum");
  },
};
</script>

<style lang='less' scoped>
ul {
  box-sizing: border-box;
  width: 100%;
  li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(194, 194, 193);
    &:hover {
      background-color: rgb(187, 187, 187);
    }
    &:hover button {
      display: block;
      cursor: pointer;
    }
    input {
      margin: 0 10px;
      cursor: pointer;
    }
    span {
      margin-left: 20px;
    }
    button {
      float: right;
      background-color: rgb(233, 43, 43);
      width: 50px;
      height: 30px;
      border: 0px;
      color: white;
      display: none;
      border-radius: 5px;
    }
  }
}
</style>