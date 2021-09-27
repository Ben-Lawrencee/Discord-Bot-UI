<template>
  <div class="login-card-wrapper">
    <v-card elevation="5">
      <div class="card-styler">
        <v-card-title>Welcome to Discord Bot UI!</v-card-title>
        <v-divider style="margin: 0 16px;"/>
        <v-text-field class="form-input-field" style="margin-top: 32px;" label="Enter your Discord Bot's Token"
                      v-on:input="inputChanged"/>
        <v-card-actions>
          <v-btn class="btn-login" color="info" :loading="loading" v-on:click="login">
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
  name: "LoginCard",
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

      /*const client = new discord.Client();
      console.log(client.login(this.token));

      this.$store.state.client = client*/
      this.$store.state.token = this.token;
      //TODO: Login client
      this.loadClient();
    },
    async loadClient() {
      setTimeout(() => {
        this.$store.state.client = {}

        for (let i = 0; i < 30; i++) {
          this.$store.commit('addGuild', { id: '' + i, selected: false })
          this.$store.commit('addUser', {
            id: '' + i,
            display: true,
            selected: false,
            presence: {
              status: "online",
              activities: [{name: "Whatever I want can go in here"}]},
            username: i + '-user',
            displayAvatarUrl: () => {
              return "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            }
          })
        }

        console.log("Logged in", this.$store.state)
        this.loading = false;
        this.$router.push({name: 'Home', path: '/Home'})
      }, 1000)
    }
  }
}
</script>

<style scoped>

.login-card-wrapper {
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