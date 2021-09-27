<template>
  <div class="dm-sidebar-nav-wrapper" v-if="$store.state.users.length > 0">
    <div v-for="user in this.$store.state.users" :key="user.id">
      <div class="dm-user-container">
        <user-card v-show="user.display" :ref="`user-${user.id}`" :UserId="user.id" :on-click="userClicked"
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
    userClicked(UserId) {
      if (!this.$store.state.users[UserId].display)
        return false;

      if (this.currentId === UserId)
        return true;

      if (this.currentId === null)
        this.currentId = UserId
      else if (this.currentId !== UserId) {
        this.$store.state.users[this.currentId].selected = false;
        this.currentId = UserId
      }

      this.$router.push({name: 'DM', path: '/channel/@bot/:id', params: {id: UserId}})
      return true;
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
  margin-top: 4px;
}

</style>