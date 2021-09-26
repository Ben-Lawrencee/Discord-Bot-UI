<template>
  <div class="sidebar-wrapper">
    <div class="page-header">
      <guild-sidebar-header v-if="this.$route.type !== undefined && this.$route.type === 'GuildView'"/>
      <dm-header v-else/>
    </div>
    <v-divider light class="toolbar-divider"/>
    <div class="nav-wrapper">
      <guild-sidebar-nav v-if="this.$route.type !== undefined && this.$route.type === 'GuildView'"/>
      <dm-sidebar-nav v-else/>
    </div>
    <v-sheet class="page-footer" color="intermediate">
      <profile-footer/>
    </v-sheet>
  </div>
</template>

<script>
import GuildSidebarHeader from "./GuildSidebarHeader.vue";
import DmHeader from "./DmHeader.vue";

import GuildSidebarNav from './GuildSidebarNav';
import DmSidebarNav from './DmSidebarNav.vue';

import ProfileFooter from "./ProfileFooter.vue";

export default {
  name: "Sidebar",
  components: {GuildSidebarNav, GuildSidebarHeader, ProfileFooter, DmSidebarNav, DmHeader}
}
</script>

<style scoped>

.sidebar-wrapper {
  min-width: 240px;
  max-width: 240px;
  height: 100%;
  background: #2f3136;
}

.page-header {
  min-width: 240px;
  max-width: 240px;
  height: 46px;
}

.toolbar-divider {
  height: 2px
}

.nav-wrapper {
  overflow: hidden;
  height: 854px; /*TODO: Figure out how to stretch div to parent height with respect to the footer and header height*/
}
.page-footer {
  position: relative;
  min-height: 52px;
  max-height: 52px;
}

</style>