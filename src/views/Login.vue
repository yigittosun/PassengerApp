<template>
  <div class="login-page">
    <div class="login-form">
      <div class="info">
        <h2 style="font-size:30px;color:white">Passenger<span style="color:#EC824A">App</span></h2>
      </div>
      <input type="text" placeholder="Username" v-model="auth.username" />
      <input type="password" placeholder="Password" v-model="auth.password" />
      <button class="primary" @click="login">Login</button>
    </div>

    <notifications group="login" position="bottom left" />
  </div>
</template>

<script>
import api from "../api/mockapi";
export default {
  data() {
    return {
      auth: {
        username: "",
        password: "",
      },
      api,
    };
  },
  methods: {
    async login() {
      const response = await this.api.login();
      if (
        this.auth.username === response[0].username &&
        this.auth.password === response[0].password
      ) { 
       
        this.$router.push("/client");
      } else {
        this.$notify({
          group: "login",
          title: "Error",
          text: "Wrong username or password",
          type: "error",
          duration: "3000",
        });
      }
    },
  },
};
</script>

<style lang="scss">
  body{
    background: url("../../src/assets/images/bg-image.png")no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

</style>
