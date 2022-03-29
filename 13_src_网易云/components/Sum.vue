<template>
  <footer>
    <input type="checkbox" /><span>已完成/全部</span>
    <button>清除已经完成的任务</button>
  </footer>
</template>

<script>
export default {
  name: "Sum",
};
</script>

<style lang='less' scoped>
// footer区域
footer {
  margin-top: 20px;
  input {
    margin-right: 20px;
  }
  button {
    float: right;
    width: 130px;
    height: 30px;
    color: white;
    border: 0px;
    border-radius: 5px;
    background-color: rgb(235, 49, 49);
  }
}
</style>