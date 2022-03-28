<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>学生姓名：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <h1>年龄：{{ myAge }}</h1>
    <button @click="updateAge">尝试修改age</button>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      msg: "hello world !",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 1.简单接收
  // props: ["name", "address", "age"],

  // 2.对象类型接收,接收数据的同时进行类型限制
  // props: {
  //   name: String,
  //   address: String,
  //   age: Number,
  // },

  // 3.对象写法第二种：
  props: {
    name: {
      type: String, //name的类型是字符串类型
      required: true, //name属性必须传
    },
    address: {
      type: String, //name的类型是字符串类型
      default: "江苏", // address属性可以不传，不传的话默认值为'江苏'
    },
    age: {
      type: Number, //name的类型是字符串类型
      required: true, //age属性必须传
    },
  },
};
</script>

<style>
</style>