<template>
  <div>
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">把学校名传给app</button>
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
  props: ["getSchoolNAme"],
  methods: {
    sendSchoolName() {
      this.getSchoolNAme(this.name);
    },
  },
};
</script>

<style>
</style>