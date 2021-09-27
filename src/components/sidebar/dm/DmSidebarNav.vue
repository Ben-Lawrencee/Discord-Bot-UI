<template>
  <div class="dm-sidebar-nav-wrapper">
    <div v-for="user in this.$store.state.users" :key="user.id">
      <div class="dm-user-container">
        <user-card v-show="user.display" :UserId="user.id" :on-click="userClicked" :on-close-clicked="userClosed" :highlighted="false"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "../../UserCard.vue";

export default {
  name: "DmSidebarNav",
  components: {
    UserCard
  },
  methods: {
    userClicked(UserId) {
      console.log("User Clicked", UserId);
      return true;
    },
    userClosed(UserId) {
      console.log("User Closed", UserId)
    }
  }
}
</script>

<style scoped>

.dm-sidebar-nav-wrapper {
  overflow: hidden scroll;
  scrollbar-width: none;
  height: 854px; /*TODO: Figure out how to stretch div to parent height with respect to the footer and header height*/
}

::-webkit-scrollbar {
  width: 0;
}

.dm-user-container {
  width: max-content;
  margin-left: 8px;
  margin-top: 4px;
}

</style>