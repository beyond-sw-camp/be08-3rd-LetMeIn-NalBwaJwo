<template lang="html">
  <BNavbar class="bg-primary" toggleable="sm">
    <BNavbarBrand href="#">
      <BImg :src="logourl" style="width: 200px; height: auto" />
    </BNavbarBrand>

    <BNavbarToggle target="nav-collapse" class="bg-white" />
    <BCollapse id="nav-collapse" is-nav>
      <!-- 네비게이션 링크들 -->
      <BNavbarNav
        class="nav-items-container d-flex flex-grow-1 justify-content-around"
      >
        <BNavItem v-for="(nav, index) in navs" :key="nav.name">
          <RouterLink
            class="text-white text-decoration-none"
            :to="nav.path"
            active-class="active-link"
          >
            {{ nav.name }}
          </RouterLink>
        </BNavItem>
      </BNavbarNav>

      <!-- 로그인, 로그아웃 버튼 -->
      <BNavbarNav class="ms-auto">
        <BNavForm>
          <BButton v-if="isLogin" @click="handleLogout"> 로그아웃 </BButton>
          <BButton v-else>
            <RouterLink class="text-black text-decoration-none" :to="'/login'">
              로그인
            </RouterLink>
          </BButton>
        </BNavForm>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
<script>
import logo from "@assets/portfolio/icons/logo.png";
import { AUTH_MUTATION_TYPES } from "@store/modules/auth/mutaion";

export default {
  computed: {
    isLogin() {
      return this.$store.state.Auth.isLogin;
    },
  },
  data() {
    return {
      logourl: logo,
      navs: [
        {
          name: "Home",
          path: `/${this.$route.params.name}/portfolio`,
        },
        {
          name: "Project",
          path: `/${this.$route.params.name}/project`,
        },
        {
          name: "Resume",
          path: `resume`,
        },
        {
          name: "Blog",
          path: `/${this.$route.params.name}/blog`,
        },
        {
          name: "Contact",
          path: `/${this.$route.params.name}/contact`,
        },
      ],
    };
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");
      this.$store.commit(AUTH_MUTATION_TYPES.LOGOUT);
      this.$router.replace(`/@yongun/portfolio`);
    },
  },
};
</script>
<style scoped>
.nav-items-container {
  max-width: 600px;
}
.text-white:hover {
  color: rgb(255, 248, 43) !important;
}
.active-link {
  color: rgb(255, 248, 43) !important;
}
</style>
