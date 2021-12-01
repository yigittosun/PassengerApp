<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/client">
          <img src="../assets/images/logo.webp" alt="" />
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <router-link to="/client"> Passengers </router-link>
          <router-link to="/create"> Create </router-link>
          <router-link to="/routedetail"> Route Details </router-link>
          <button class="secondary" @click="goToLogin">Logout</button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>
