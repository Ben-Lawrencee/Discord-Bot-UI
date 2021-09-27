<template>
  <div class="user-wrapper" @click="onClick(UserId)" ref="user-wrapper">
    <user-avatar :user-id="UserId" style="margin-right: 12px"/>
    <div class="user-content" ref="user-content">
      <div class="user-name">
        {{ this.$store.state.users[UserId].username }}
      </div>
      <div v-if="this.$store.state.users[UserId].presence" class="user-status">
        {{ this.$store.state.users[UserId].presence.activities[0].name }}
      </div>
    </div>
    <div v-if="onCloseClicked !== null" class="user-close" @click="onCloseClicked(UserId)">
      <svg class="user-close-icon" viewBox="0 0 24 24">
        <path fill="currentColor" style="width: 100%; height: 100%;" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar";

export default {
  name: "UserCard",
  components: {UserAvatar},
  props: {
    UserId: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: Function,
      required: true
    },
    onCloseClicked: {
      type: Function,
      required: false,
      default: null
    }
  },
  methods: {
    select() {
      this.$refs["user-wrapper"].style.background = 'rgba(255, 255, 255, 0.1)'
      this.$refs["user-content"].style.color = 'rgba(255, 255, 255, .9)'
    },
    deselect() {
      this.$refs["user-wrapper"].style.background = 'transparent'
      this.$refs["user-content"].style.color = '#8d9093'
    }
  },
  watch: {
    selected: function (val) {
      val ? this.select() : this.deselect();
    }
  }
}
</script>

<style scoped>

.user-wrapper {
  display: flex;
  width: 224px;
  height: 42px;
  border-radius: 5px;
  padding: 0 8px;
  cursor: pointer;
}

.user-wrapper:hover > .user-close {
  display: block;
}

.user-wrapper:hover {
  background: rgba(255, 255, 255, .02);
}

.user-wrapper:hover > .user-content{
  color: #a9adb0; /*TODO: Make this text hover color*/
}

.user-content {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  color: #8d9093; /*TODO: Make this text color*/
}

.user-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.user-status {
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 10pt;
}

.user-close {
  display: none;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;

  width: 20px;
  height: 20px;
}

.user-close-icon {
  margin: auto;
  color: #8d9093; /*TODO: Text Color*/
  width: 16px;
  height: 16px;
}

.user-close-icon:hover {
  color: rgba(255, 255, 255, .9);
  cursor: pointer;
}

</style>