// @ts-nocheck
import VueRouter from "vue-router";

import School from "../pages/School";
import Student from "../pages/Student";
import Msg from "../pages/Msg";
import News from "../pages/News";

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
        },
        {
          path: "news",
          component: News,
        },
      ],
    },
  ],
});
