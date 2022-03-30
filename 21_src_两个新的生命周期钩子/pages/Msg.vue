<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <router-link
          :to="{
            name: 'det',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replace(m)">replace查看</button>
      </li>
    </ul>
    <router-view class="msg"></router-view>
  </div>
</template>

<script>
export default {
  name: "Msg",
  data() {
    return {
      msgList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "det",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replace(m) {
      this.$router.replace({
        name: "det",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
a {
  cursor: pointer;
}
a:hover {
  color: rgb(177, 40, 40);
}
.msg {
  margin-left: 20px;
}
</style>