import {
  ContactView,
  LoginView,
  NotFoundView,
  ResumeDetailsView,
  UserView,
  PortfolioView,
  ProjectView,
  BlogView,
  ResumesView,
} from "@views/index";
import store from "@store/index";

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
        children: [
          {
            name: "Resumes",
            path: "",
            component: ResumesView,
            beforeEnter: (to, from, next) => {
              if (!store.state.Auth.isLogin) {
                next(`resume/${store.getters.getDefaultResumeId}`);
              }
              next();
            },
          },
          {
            name: "ResumeDetail",
            path: ":resumeId",
            component: ResumeDetailsView,
          },
        ],
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
      // {
      //   path: "/:name/:pathMatch(.*)*",
      //   redirect: "/404",
      // },
    ],
  },
  // 로그인 페이지
  {
    name: "Login",
    path: "/login",
    component: LoginView,
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   redirect: "/404",
  // },
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
