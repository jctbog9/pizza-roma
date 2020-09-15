<template>
  <div class="top-bar">
    <nuxt-link to="/">
      <img class="logo" src="/pizzaroma-logo.svg"/>
    </nuxt-link>
    <div class="top-bar-right">
      <font-awesome-icon v-if="!showMobileNav" icon="bars" v-on:click="handleShowNav"/>
      <font-awesome-icon v-else icon="times" v-on:click="handleShowNav"/>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapState(['showMobileNav'])
  },
  methods: {
    ...mapMutations(['openMobileNav', 'closeMobileNav']),
    ...mapActions(['handleShowNav'])
  }
}
</script>

<style scoped>
.top-bar-content {
  color: #ffffff;
}

.nav-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100px;
  font-size: 16px;
  color: #ffffff;
}

.logo {
  padding: 5px;
  margin: 5px;
  height: 65px;
}
.top-bar {
  display: flex;
  height: 75px;
  width: 100%;
  background-color: #1e1f25;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-bar-right {
  margin: 20px;
  color: white;
}

.top-bar-left {
  align-items: center;
  width: 300px;
}
</style>