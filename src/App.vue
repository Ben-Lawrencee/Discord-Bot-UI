<template>
  <v-app>
    <v-main>
      <login-view v-if="this.$route.name === 'Login'"/>
      <div v-else class="wrapper">
        <navbar/>
        <sidebar/>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LoginView from "./views/LoginView.vue"
import Navbar from "./components/navbar/Navbar.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";

export default {
  name: 'App',
  components: {
    LoginView,
    Navbar,
    Sidebar
  },
  created() {
    if (this.$store.state.client === null && this.$route.name !== 'Login') {
      console.log("Redirected to Login from initialization")
      this.$router.push({name: 'Login', path: '/Login'})
    }

    this.$router.beforeEach((to, from, next) => {
      if (this.$store.state.client === null) {
        if (to.name !== 'Login') {
          next({name: 'Login', path: '/Login'})
          return;
        }
        return;
      } else if (to.name === 'Login') {
        next(false);
        return;
      }
      next();
    });

    this.$router.afterEach(to => {
      switch (to.name) {
        case 'Login':
          this.$store.commit('updateViewType', 'Login');
          return;
        case 'Home':
          this.$store.commit('updateViewType', 'DirectView');
          return;
        case 'Friends':
          this.$store.commit('updateViewType', 'DirectView');
          return;
        case 'DM':
          this.$store.commit('updateViewType', 'DirectView');
          return;
        case 'GuildChannel':
          this.$store.commit('updateViewType', 'GuildView');
          return;
      }
    });
  }
};
</script>

<style scoped>

.wrapper {
  display: flex;

  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  width: 0;
}

</style>