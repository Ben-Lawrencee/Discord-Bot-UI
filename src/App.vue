<template>
  <v-app>
    <v-main>
      <div class="page-wrapper">
        <guild-nav-bar :on-guild="onGuildChange" :on-home="goHome"/>
        <nav-drawer/>
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import GuildNavBar from "./components/GuildNavBar.vue";
import NavDrawer from "./components/NavDrawer.vue";

export default {
  name: 'App',
  components: {
    GuildNavBar,
    NavDrawer
  },
  methods: {
    goHome() {

    },
    onGuildChange() {

    },
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>

.page-wrapper {
  display: flex;

  width: 100%;
  height: 100%;
}

</style>