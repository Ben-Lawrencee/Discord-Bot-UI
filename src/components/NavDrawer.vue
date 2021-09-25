<template>
  <div class="guild-nav-bar-wrapper">
    <div class="page-header">
      <guild-header/>
      <dm-header/>
    </div>
    <guild-page-nav/>
    <dm-page-nav/>
    <div class="page-footer">
      <profile-footer/>
    </div>
  </div>
</template>

<script>
import GuildHeader from "./GuildHeader.vue";
import DmHeader from "./DmHeader.vue";

 import GuildPageNav from './GuildPageNav';
import DmPageNav from './DmPage.vue';

import ProfileFooter from "./ProfileFooter.vue";

export default {
  name: "PageNavBar",
  components: {GuildPageNav, GuildHeader, ProfileFooter, DmPageNav, DmHeader}
}
</script>

<style scoped>

.guild-nav-bar-wrapper {
  width: 240px;
  height: 100%;
  background: #2f3136;
}

.page-header {
  width: 100%;
  height: 48px;
}

.page-header {
  width: 240px;
  height: 46px;
}

</style>