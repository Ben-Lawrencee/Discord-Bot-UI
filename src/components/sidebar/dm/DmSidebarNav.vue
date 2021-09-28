<template>
  <div class="dm-sidebar-nav-wrapper">
    <div v-for="user in this.$store.state.users" :key="user.id">
      <div class="dm-user-container">
        <user-card v-show="user.display" :user-id="user.id" :on-click="userClicked"
                   :on-close-clicked="userClosed" :selected="$store.state.users[user.id].selected"/>
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
  data() {
    return {
      currentId: null
    }
  },
  methods: {
    async userClicked(UserId) {
      if (!this.$store.state.users[UserId].display)
        return;

      if (this.currentId === UserId)
        return;

      if (!(await this.$store.dispatch({ type: 'selectUser', UserId: UserId})))
        return;

      await this.$router.push({name: 'DM', path: '/channel/@bot/:id', params: {id: UserId}})
    },
    userClosed(UserId) {
      this.$store.state.users[UserId].display = false;
      this.$store.state.users[UserId].selected = false;
    }
  },
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
  margin-top: 2px;
  margin-bottom: 2px;
}

</style>