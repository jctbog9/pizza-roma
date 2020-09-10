<template>
  <div class="page">
    <div class="page-content">
      <div class="contact-info">
        <div>
          <img src="joe1.jpg">
        </div>
        <div class="CTA-content">
          Joe has been serving pizzas in Watertown for over 40 years and has enjoyed every minute of it! He loves engaging with the community and always gets excited to see friendly faces returning for some more Pizza Roma!
          <button class="custom-button">Order Now!</button>
        </div>
      </div>
      <div class="featured-image">
        <img class="image-content" src="/inside2.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.CTA-content {
  display: flex;
  flex-direction: column;
  width: 320px;
}

.page {
  background-image: image('../static/inside2.jpg');
}

.contact-info {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
}

.image-content {
  width: 1050px;
  overflow: hidden;
}

.custom-button {
  padding: 20px;
  background-color: #2151A1;
  border: none;
  color: #ffffff;
  border-radius: 2px;
  cursor: pointer;
}
</style>
