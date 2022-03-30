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

const router = new VueRouter({
  routes: [
    {
      name: "student",
      path: "/student",
      component: Student,
      meta: {
        sure: false,
        title: "学生",
      },
    },
    {
      name: "school",
      path: "/school",
      component: School,
      meta: {
        sure: false,
        title: "学校",
      },
      children: [
        {
          name: "msg",
          path: "msg",
          component: Msg,
          meta: {
            sure: false,
            title: "信息",
          },
          children: [
            {
              name: "det",
              path: "detail",
              component: Detail,
              meta: {
                sure: false,
                title: "消息",
              },
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
          name: "news",
          path: "news",
          component: News,
          meta: {
            sure: true,
            title: "最新消息",
          },
        },
      ],
    },
  ],
});

// 创建全局前置路由守卫--初始化的时候会被调用、每次路由器切换之前会被调用
router.beforeEach((to, from, next) => {
  console.log(next);
  if (to.meta.sure) {
    if (localStorage.getItem("id") === "jungle1") {
      next();
    } else {
      alert("用户名错误，无权限查看");
    }
  } else {
    next();
  }
});

// 全局后置路由守卫--初始化时被调用、每次切换路由时被调用
router.afterEach((to, from) => {
  // console.log(to, from);
  document.title = to.meta.title || "首页";
});

export default router;