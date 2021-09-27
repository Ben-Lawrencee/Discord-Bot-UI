<template>
  <div class="user-card-wrapper">
    <v-badge bottom :color="getStatusColor()" overlap dot bordered avatar>
      <v-avatar size="32">
        <img :src="this.$store.state.users[UserId].displayAvatarUrl()" alt="Usr"/>
      </v-avatar>
    </v-badge>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
    UserId: {
      type: String,
      required: true,
    }
  },
  methods: {
    getStatusColor() {
      switch (this.$store.state.users[this.UserId].presence.status) {
        case "online":
          return "#3ba45d"
        case "dnd":
          return "#eb4145"
        case "idle":
          return "#f8a71b"
        case "offline":
          return "#737E8DFF" //May not have users offline cached
      }
    }
  }
}
</script>

<style scoped>

.user-card-wrapper {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
}

</style>