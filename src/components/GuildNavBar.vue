<template>
  <v-sheet class="wrapper" color="tertiary" dark>
    <nav-avatar :init-selected="true" :on-click="onHomeClicked"/>
    <v-divider style="width: 60%; margin-left: auto; margin-right: auto;"/>
  </v-sheet>
</template>

<script>
import NavAvatar from "./NavAvatar";
export default {
  name: "GuildNavBar.vue",
  components: {NavAvatar},
  methods: {
    onHomeClicked(selected) {
      console.log("Home was clicked")
      return !selected;
    }
  },
  data() {
    return {
      homeSelected: false
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