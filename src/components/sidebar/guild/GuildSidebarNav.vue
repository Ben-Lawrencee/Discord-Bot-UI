<template>
  <div class="guild-sidebar-nav-wrapper">
    Guild view
  </div>
</template>

<script>
export default {
  name: "GuildSidebarNav"
}
</script>

<style scoped>

.guild-sidebar-nav-wrapper {
  overflow: hidden scroll;
  scrollbar-width: none;
  height: 854px; /*TODO: Figure out how to stretch div to parent height with respect to the footer and header height*/
}

</style>