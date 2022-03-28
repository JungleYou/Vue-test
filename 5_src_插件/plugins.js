export default {
  install(Vue) {
    // 定义全局过滤器
    Vue.filter("mySlice", function (value) {
      return value.slice(0, 4);
    });

    // 定义全局指令
    Vue.directive("fbind", {
      // 指令与元素成功绑定时调用
      bind(element, binding) {
        element.value = binding.value;
      },
      //   指令所在元素被插入页面时调用
      inserted(element, binding) {
        console.log(binding);
        element.focus();
      },
      //   指令所在模板被重新调用时解析
      update(element, binding) {
        element.value = binding.value;
      },
    });

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 1,
          y: 2,
        };
      },
    });

    // 给Vue原型添加一个方法
    Vue.prototype.hello = () => {
      alert("你好");
    };
  },
};
