<template>
  <div id="nav">
    <span class="logo">BARBOOKS RECRUITMENT TASK</span>
    <span class="menu">
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Register'}">Register</router-link>
      </span>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style lang="scss" scoped>
  @import './../assets/sass/variables';

  #nav {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    text-align: right;
    box-shadow: 0 0 8px 3px rgba(184, 184, 184, 1);

    .logo {
      font-weight: bold;
    }

    .menu {
      a {
        padding: 5px;
        font-weight: bold;
        color: $secondary;
        text-decoration: none;

        &.router-link-exact-active {
          color: $primary;
        }
      }
    }
  }
</style>
