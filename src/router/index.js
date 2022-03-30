// @ts-nocheck
import VueRouter from "vue-router";

import School from "../pages/School";
import Student from "../pages/Student";
import Msg from "../pages/Msg";
import News from "../pages/News";
import Detail from "../pages/Detail";

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
              path: "detail/:id/:title",
              component: Detail,
              // 1.props的第一种写法，值为对象，该队现观众的所有key-value都会以porps的形式传给detail组件
              // props: { a: 1, b: "hello" },

              // 2.props的第二种写法，值为布尔值
              // 若props值为布尔值，就会把该路由组件所受到的所有params参数以props的形式传递给detail组件
              props: true,
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
