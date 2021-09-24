<template>
  <v-sheet class="wrapper" color="tertiary" dark>
    <nav-avatar :guild-id="''" :selected="true" :on-click="onHomeClicked"/>
    <v-divider style="width: 60%; margin-left: auto; margin-right: auto; margin-bottom: 10px;"/>
    <div v-for="guild in this.$store.state.client.guilds" v-bind:key="guild.id">
      <nav-avatar :guild-id="guild.id" :selected="false" :on-click="() => {return onGuildClicked(guild)}"/>
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
      this.currentID = null;
      return true;
    },
    onGuildClicked(guild) {
      console.log(guild)
      let change = this.currentID === guild.id || this.currentID === '';
      this.currentID = (change ? guild.id : this.currentID)
      return change;
    }
  },
  data() {
    return {
      homeSelected: false,
      currentID: null,
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