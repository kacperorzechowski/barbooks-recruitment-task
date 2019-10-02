<template>
  <div id="app">
    <navigation-bar></navigation-bar>

    <div class="card sm mt-3">
      <transition name="slide-to-right" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'assets/sass/variables';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .slide-to-right-enter-active, .slide-to-right-leave-active {
    transition: all .3s ease;
  }

  .slide-to-right-enter, .slide-to-right-leave-to {
    transform: translateX(-100px);
    opacity: 0;
  }
</style>
<script>
import NavigationBar from './components/NavigationBar'
export default {
  components: { NavigationBar }
}
</script>
