<template>
  <div class="login-view-wrapper">
    <login-card/>
  </div>
</template>

<script>

import LoginCard from "../components/LoginCard.vue";
export default {
  name: 'Home',
  components: {LoginCard},
}

</script>

<style scoped>

.login-view-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

</style>
