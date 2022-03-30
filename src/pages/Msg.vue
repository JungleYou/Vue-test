<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <router-link
          :to="{
            name: 'det',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
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