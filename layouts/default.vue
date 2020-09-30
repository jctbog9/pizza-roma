<template>
  <div class="page">
    <TopBar class="is-hidden-touch"/>
    <MobileTopBar class="is-hidden-desktop"/>
    <div v-if="!showMobileNav">
      <Nuxt class="content" />
    </div>
    <div v-else>
      <MobileNavigationMenu />
    </div>
    <BottomBar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import MobileNavigationMenu from '../components/MobileNavigationMenu'

export default {
  components: { TopBar, BottomBar, MobileNavigationMenu },
  computed: mapState(['showMobileNav'])
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

.white-wrapper {
  background-color: #ffffff;
}

.page {
  background-image: url('/vegas.jpg');
  background-attachment: fixed;
  background-position: center;
}

.content {
  min-height: 100vh;
  margin-bottom: 0px !important;
  position: relative;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.custom-button {
  padding: 20px;
  background-color: #DDB833;
  border: none;
  color: #000000;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.custom-button:hover {
  background-color: #d3965e;
}

.cursive {
  font-family: 'Dancing Script', cursive;
}

</style>
