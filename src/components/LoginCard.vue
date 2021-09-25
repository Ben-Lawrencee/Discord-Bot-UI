<template>
  <div class="login-wrapper">
    <v-card>
      <div class="card-styler">
        <v-card-title>Welcome to Discord Bot UI!</v-card-title>
        <v-divider style="margin: 0 16px"/>
        <v-text-field class="form-input-field" style="margin-top: 32px" label="Enter your Discord Bot's Token" v-on:input="inputChanged"/>
        <v-card-actions>
          <v-btn class="btn-login" color="info" dark :loading="loading" v-on:click="login">
            Login
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>

<script>
// const discord = require('discord.js/browser');

export default {
  name: "LogInCard",
  data() {
    return {
      token: '',
      loading: false,
    }
  },
  methods: {
    inputChanged(value) {
      this.token = value
    },
    login() {
      this.loading = true;

      // const client = new discord.Client();
      // console.log(client.login(this.token));

      // this.$store.state.client = client
      this.$store.state.token = this.token;
      //TODO: Login client
    }
  }
}
</script>

<style scoped>

.login-wrapper {
  margin: auto;
  width: 480px;
  max-height: max-content;
}

.card-styler {
  padding: 20px;
}

.btn-login {
  margin-left: auto;
  width: 100%;
}

.form-input-field {
  margin: 16px;
}

</style>