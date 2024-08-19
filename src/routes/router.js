import {
  ContactView,
  LoginView,
  NotFoundView,
  UserView,
  PortfolioView,
  ProjectView,
  BlogView,
} from "@views/index";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:name",
    redirect: { name: "Main" },
    component: UserView,
    beforeEnter: (to, from, next) => {
      if (!to.params.name.startsWith("@")) {
        next("/404");
      }
      next();
    },
    children: [
      {
        name: "Main",
        path: "portfolio",
        component: PortfolioView,
      },
      {
        name: "Project",
        path: "project",
        component: ProjectView,
      },
      {
        name: "Resume",
        path: "resume",
        component: ContactView,
      },
      {
        name: "Blog",
        path: "blog",
        component: BlogView,
      },
      // contact 페이지
      {
        name: "Contact",
        path: "contact",
        component: ContactView,
      },
      {
        path: "/:name/:pathMatch(.*)*",
        redirect: "/404",
      },
    ],
  },
  // 로그인 페이지
  {
    name: "Login",
    path: "/login",
    component: LoginView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
