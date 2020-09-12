<template>
  <div>
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
  padding: 40px 0px 50px 0px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.4);
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
