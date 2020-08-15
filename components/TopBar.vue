<template>
  <div class="top-bar">
    <img class="logo" src="/logo.png"/>
    <div class="top-bar-right">
      <div class="nav-element">Home</div>
      <div class="nav-element">Contact</div>
      <div class="nav-element">Menu</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style>
.nav-element {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100px;
  font-size: 16px;
}

.logo {
  height: 90%;
  margin-left: 10px;
}
.top-bar {
  display: flex;
  height: 75px;
  width: 100%;
  background-color: #191A21;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-bar-right {
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: white;
}
</style>