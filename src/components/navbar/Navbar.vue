<template>
  <v-sheet class="nav-bar-wrapper" color="tertiary" dark>
    <nav-avatar :guild-id="''" :transparent="false" :selected="homeSelected" :on-click="onHomeClicked"/>
    <v-divider style="width: 60%; margin-left: auto; margin-right: auto; margin-bottom: 10px;"/>
    <div v-for="guild of guilds" v-bind:key="guild.id">
      <nav-avatar :guild-id="guild.id" :transparent="false" :on-click="onGuildClicked"/>
    </div>
  </v-sheet>
</template>

<script>
import NavAvatar from "./NavAvatar.vue";
import {mapState} from 'vuex';

export default {
  name: "Navbar",
  components: {NavAvatar},
  computed: mapState({guilds: state => state.guilds, lastDmID: state => state.lastDmID}),
  data() {
    return {
      homeSelected: true,
    }
  },
  methods: {
    onHomeClicked() {
      this.$store.commit('deselectGuild')

      this.homeSelected = true;

      if (this.lastDmID === null)
        this.$router.push({name: 'Home', path: '/Home'})
      else
        this.$router.push({
          name: 'DM',
          path: '/channel/@bot/' + this.lastDmID,
          params: {id: this.lastDmID}
        })
    },
    async onGuildClicked(guildId) {
      if (!(await this.$store.dispatch({type: 'selectGuild',  guildId: guildId })))
        return;

      this.homeSelected = false;
      await this.$router.push({name: 'GuildChannel',
        path: 'channel/guild/' + this.$store.state.selectedGuild,
        params: {id: this.$store.state.selectedGuild}
      });
    }
  },
}
</script>

<style scoped>

.nav-bar-wrapper {
  min-width: 72px;
  height: 100%;
  max-height: 100vh;
  padding-top: 10px;
  overflow: hidden scroll;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  width: 0;
}

</style>