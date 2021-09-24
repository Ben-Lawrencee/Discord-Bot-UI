<template>
  <v-app>
    <v-main style="display: flex">
      <guild-nav-bar/>
      <page-nav-bar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import GuildNavBar from "./components/GuildNavBar.vue";
import PageNavBar from "./components/PageNavBar.vue";

export default {
  name: 'App',
  components: {
    GuildNavBar,
    PageNavBar
  },
  data: () => ({
    //
  }),
};
</script>

<style>

</style>