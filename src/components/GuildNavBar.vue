<template>
  <v-sheet class="wrapper" color="tertiary" dark>
    <nav-avatar ref="home" :guild-id="''" :selected="true" :on-click="onHomeClicked"/>
    <v-divider style="width: 60%; margin-left: auto; margin-right: auto; margin-bottom: 10px;"/>
    <div v-for="guild in this.$store.state.client.guilds" v-bind:key="guild.id">
      <nav-avatar :ref="'guild-' + guild.id" :guild-id="guild.id" :selected="false" :on-click="() => {return onGuildClicked(guild)}"/>
    </div>
  </v-sheet>
</template>

<script>
import NavAvatar from "./NavAvatar";

export default {
  name: "GuildNavBar.vue",
  components: {NavAvatar},
  methods: {
    onHomeClicked() {
      if (this.currentID === '')
        return;
      this.$refs["guild-" + this.currentID][0].deselect();
      this.currentID = '';
      return true;
    },
    onGuildClicked(guild) {
      let change = this.currentID !== guild.id;
      if (!change)
        return false;

      if (this.currentID !== '')
        this.$refs["guild-" + this.currentID][0].deselect();
      else
        this.$refs.home.deselect();

      this.currentID = (change ? guild.id : this.currentID)
      return true;
    }
  },
  data() {
    return {
      homeSelected: false,
      currentID: '',
    }
  }
}
</script>

<style scoped>

.wrapper {
  width: 72px;
  height: 100%;
  padding-top: 10px;
}

</style>