<template lang="html">
  <BNavbar class="bg-primary" toggleable="sm">
    <BNavbarBrand href="#">
      <BImg :src="logourl" style="width: 200px; height: auto;" />
    </BNavbarBrand>
    
    

    <BNavbarToggle target="nav-collapse" class="bg-white" />
    <BCollapse id="nav-collapse" is-nav>
      <!-- 네비게이션 링크들 -->
      <BNavbarNav
        class="nav-items-container d-flex flex-grow-1 justify-content-around"
      >
        <BNavItem v-for="(nav, index) in navs" :key="nav.name">
          <RouterLink class="text-white text-decoration-none" :to="nav.path" active-class="active-link">
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
import logo from '@assets/portfolio/icons/logo.png';
export default {
  
  data() {
    return {
      isLogin: localStorage.getItem("ACCESS_TOKEN") !== null,
      logourl: logo,
      navs: [
        {
          name: "Home",
          path: "portfolio",
        },
        {
          name: "Project",
          path: `project`,
        },
        {
          name: "Resume",
          path: `resume`,
        },
        {
          name: "Blog",
          path: `blog`,
        },
        {
          name: "Contact",
          path: `contact`,
        },
      ],
    };
  },
  methods: {
    handleLogout() {
      const user = JSON.parse(localStorage.getItem("CURRENT_USER"));
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("CURRENT_USER");
      this.isLogin = false;
      this.$router.replace(`/${user.name}/portfolio`);
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
