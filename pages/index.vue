<template>
  <div class="page">
    <div class="featured-image">
      <img src="/inside2.jpg">
    </div>
    <div class="page-content">
      <div class="contact-info">
        <div>
          <img src="joe1.jpg">
        </div>
        <div>
          <button class="custom-buttom">Order Now!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.page {
  background-image: image('../static/inside2.jpg');
}

.contact-info {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.page-content {
  background-color: #80D4FF;
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
</style>
