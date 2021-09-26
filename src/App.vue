<template>
  <v-app>
    <v-main>
      <login-view v-if="this.$route.name === 'Login'"/>
      <div v-else class="page-wrapper">
        <guild-nav-bar :on-guild="onGuildChange" :on-home="goHome"/>
        <nav-drawer/>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LoginView from "./views/LoginView.vue"
import GuildNavBar from "./components/GuildNavBar.vue";
import NavDrawer from "./components/NavDrawer.vue";

export default {
  name: 'App',
  components: {
    LoginView,
    GuildNavBar,
    NavDrawer
  },
  methods: {
    goHome() {
      // Change global page to home
    },
    onGuildChange() {
      // Load guild and change page globally
    },
  },
  created() {
    if (this.$store.state.client === null && this.$route.name !== 'Login') {
      console.log("Redirected to Login from initialization")
      this.$router.push({name: 'Login', path: '/Login'})
    }

    this.$router.beforeEach((to, from, next) => {
      console.log(from.path, "to", to.path)
      if (this.$store.state.client === null) {
        if (to.name !== 'Login') {
          console.log("Redirected to Login")
          next({name: 'Login', path: '/Login'})
          return;
        }
        return;
      } else if (to.name === 'Login') {
        next(false);
        return;
      }
      next();
    })
  }
};
</script>

<style scoped>

.page-wrapper {
  display: flex;

  width: 100%;
  height: 100%;
}

</style>