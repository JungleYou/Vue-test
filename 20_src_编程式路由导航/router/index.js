// @ts-nocheck
import VueRouter from "vue-router";

import School from "../pages/School";
import Student from "../pages/Student";
import Msg from "../pages/Msg";
import News from "../pages/News";
import Detail from "../pages/Detail";

const includPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return includPush.call(this, location).catch((err) => err);
};

export default new VueRouter({
  routes: [
    {
      path: "/student",
      component: Student,
    },
    {
      path: "/school",
      component: School,
      children: [
        {
          path: "msg",
          component: Msg,
          children: [
            {
              name: "det",
              path: "detail",
              component: Detail,
              // 1.props的第一种写法，值为对象，该队现观众的所有key-value都会以porps的形式传给detail组件
              // props: { a: 1, b: "hello" },

              // 2.props的第二种写法，值为布尔值
              // 若props值为布尔值，就会把该路由组件所受到的所有params参数以props的形式传递给detail组件
              // props: true,

              // 3.props的第三种写法，值为函数(这里使用了结构赋值)
              props({ query: { id, title } }) {
                return { id: id, title: title };
              },
            },
          ],
        },
        {
          path: "news",
          component: News,
        },
      ],
    },
  ],
});
