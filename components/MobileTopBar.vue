<template>
  <div class="top-bar">
    <img class="logo" src="/pizzaroma-logo.svg"/>
    <div class="top-bar-right">
      <font-awesome-icon icon="bars" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
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

.nav-element:hover {
  background-color: #22242c;
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
  background-color: #191A21;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  opacity: 0.99;
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