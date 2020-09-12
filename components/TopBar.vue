<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <img class="logo" src="/pizzaroma-logo.svg"/>
    </div>
    <div class="top-bar-content">
      CASH ONLY
    </div>
    <div class="top-bar-right">
      <nuxt-link to="/" class="nav-element">Home</nuxt-link>
      <nuxt-link to="/menu" class="nav-element">Menu</nuxt-link>
      <nuxt-link to="/contact" class="nav-element">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style>
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

.nav-element:hover {
  background-color: #22242c;
}

.logo {
  height: 90%;
  padding: 5px;
  margin: 5px;
  height: 70px;
}
.top-bar {
  display: flex;
  height: 75px;
  width: 100%;
  background-color: #191A21;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 0.99;
}

.top-bar-right {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
}

.top-bar-left {
  align-items: center;
  width: 300px;
}
</style>