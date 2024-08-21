<template lang="html">
  <BNavbar class="bg-primary" toggleable="sm">
    <BNavbarBrand href="#">LetMeIn</BNavbarBrand>

    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <!-- 네비게이션 링크들 -->
      <BNavbarNav class="d-flex flex-grow-1 justify-content-around">
        <BNavItem v-for="(nav, index) in navs" :key="nav.name">
          <RouterLink class="text-black text-decoration-none" :to="nav.path">
            {{ nav.name }}
          </RouterLink>
        </BNavItem>
      </BNavbarNav>

      <!-- 로그인, 로그아웃 버튼 -->
      <BNavbarNav>
        <BNavForm>
          <BButton>
            <RouterLink class="text-black text-decoration-none" to="/login">
              로그인
            </RouterLink>
          </BButton>
        </BNavForm>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
<script>
export default {
  data() {
    return {
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
};
</script>
<style lang=""></style>
