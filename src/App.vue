<template>
  <v-app>
    <v-main>
      <script type="text/javascript" src="discord.master.min.js"></script>
      <script type="text/javascript">
        console.log(Discord);
      </script>
      <login-view v-if="isLoggedOut"/>
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
    isLoggedOut() {
      let loggedIn = this.$store.state.client !== null;
      if (!loggedIn)
        return true;
      else
        return this.$route.name === 'Login'
    },
    goHome() {
      // Change global page to home
    },
    onGuildChange() {
      // Load guild and change page globally
    },
  },
};
</script>

<style scoped>

.page-wrapper {
  display: flex;

  width: 100%;
  height: 100%;
}

</style>