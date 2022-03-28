<template>
  <div>
    <h1>app组件{{ schoolName }}</h1>
    <hr />
    <!-- 通过父组件给子组件传递函数类型的props：子给父传递数据 -->
    <School :getSchoolNAme="getSchoolNAme" />
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据 -->
    <!-- <Student @jungle="getStudentName" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref) -->
    <Student ref="student" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      schoolName: "",
    };
  },
  methods: {
    getSchoolNAme(name) {
      console.log("app收到了name", name);
      this.schoolName = name;
    },
    getStudentName(name, ...params) {
      console.log("app收到了学生名", name, params);
    },
  },
  mounted() {
    this.$refs.student.$on("jungle", this.getStudentName);
  },
};
</script>

<style>
</style>