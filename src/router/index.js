import VueRouter from "vue-router";
import BuyHouse from "../components/好客租房.vue";
import ZiXun from "../components/资讯.vue";
import WoDe from "../components/我的.vue";
import ZhaoFang from "../components/找房.vue";
import ShouYe from "../components/首页.vue";
const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/house",
  },
  {
    path: "/house",
    component: BuyHouse,
    children: [
      { path: "/ZiXun", component: ZiXun },
      { path: "/WoDe", component: WoDe },
      { path: "/ZhaoFang", component: ZhaoFang },
      { path: "/ShouYe", component: ShouYe },
    ],
  },
];

const router = new VueRouter({
  mode: "history", //采用哪种路由模式,默认是history,可改为hash
  routes,
});

export default router;
