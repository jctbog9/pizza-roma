<template>
  <div>
    <div class="mobile-layout is-hidden-desktop">
      <img class="image" src="joe1.jpg">
      <contact-info />
      <mobile-carousel />
    </div>
    <div class="page-content is-hidden-touch">
      <div class="contact-info">
        <div class="image">
          <img src="joe1.jpg">
        </div>
        <contact-info />
      </div>
      <div class="featured-image">
        <carousel />
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from '../components/ContactInfo'
import Carousel from '../components/Carousel'
import MobileCarousel from '../components/MobileCarousel'

export default {
  components: { ContactInfo, Carousel, MobileCarousel }
}
</script>

<style>
.image {
  margin: 0px 0px 10px 0px;
}

.mobile-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-info {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding: 40px 0px 50px 0px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
}

.page-content {
  width: 100%;
  min-height: 60vh;
}

.featured-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  background-color: #ffffff;
}

.image-content {
  margin: 50px 0px;
  height: 576px;
  width: 1024px;
  overflow: hidden;
}
</style>
