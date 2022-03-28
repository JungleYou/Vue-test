<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名传给app</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁student实例对象</button>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      name: "江狗狗",
      sex: "女",
    };
  },
  methods: {
    sendStudentName() {
      this.$emit("jungle", this.name, 666, 777, 888);
    },
    unbind() {
      // this.$off("jungle"); //解绑一个自定义事件
      this.$off(["jungle", "sendSchoolName"]); //使用数组形式可以解绑多个自定义事件
      // this.$off() //解绑所有的事件
    },
    death() {
      this.$destroy(); //销毁了当前组件实例对象，销毁后所有的student实例的自定义事件全都不奏效了
    },
  },
};
</script>

<style>
</style>