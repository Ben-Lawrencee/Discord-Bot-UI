<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <guild-sidebar-header v-if="this.$route.type !== undefined && this.$route.type === 'GuildView'"/>
      <dm-header v-else/>
    </div>
    <v-divider light class="toolbar-divider"/>
    <guild-sidebar-nav v-if="this.$route.type !== undefined && this.$route.type === 'GuildView'"/>
    <dm-sidebar-nav v-else/>
    <sidebar-footer/>
  </div>
</template>

<script>
import GuildSidebarHeader from "./guild/GuildSidebarHeader.vue";
import DmHeader from "./dm/DmHeader.vue";

import GuildSidebarNav from './guild/GuildSidebarNav';
import DmSidebarNav from './dm/DmSidebarNav.vue';

import SidebarFooter from "./SidebarFooter.vue";

export default {
  name: "Sidebar",
  components: {GuildSidebarNav, GuildSidebarHeader, SidebarFooter, DmSidebarNav, DmHeader}
}
</script>

<style scoped>

.sidebar {
  min-width: 240px;
  max-width: 240px;
  height: 100%;
  background: #2f3136;
}

.sidebar-header {
  min-width: 240px;
  max-width: 240px;
  height: 46px;
}

.toolbar-divider {
  height: 2px
}
</style>