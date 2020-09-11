<template>
  <div class="white-wrapper">
    <div class="page-content">
      <div class="contact-info">
        <div>
          <img src="joe1.jpg">
        </div>
        <contact-info/>
      </div>
      <div class="featured-image">
        <img class="image-content" src="/inside2.jpg">
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from '../components/ContactInfo'

export default {
  components: { ContactInfo }
}
</script>

<style>
.contact-info {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 50px;
  overflow: hidden;
}

.page-content {
  width: 100%;
  min-height: 60vh;
  padding-top: 20px;
}

.featured-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 450px;
  overflow: hidden;
}

.image-content {
  width: 1050px;
  overflow: hidden;
}
</style>
