<template>
  <div class="page">
    <div class="page-content">
      <div class="contact-info">
        <div>
          <img src="joe1.jpg">
        </div>
        <div class="CTA-content">
          Pizza Roma
          <div class="location-info">
            <div>
              <font-awesome-icon icon="map-marker-alt"/> 212 Waverley Ave, Watertown, MA 02472
            </div>
            <div>
              <font-awesome-icon icon="phone"/> (617) 924-9595
            </div>
            <div><font-awesome-icon icon="calendar"/> Hours:</div>
            <div>Monday 10AM - 10PM</div>
            <div>Tuesday 10AM - 10PM</div>
            <div>Wednesday 10AM - 10PM</div>
            <div>Thursday 10AM - 10PM</div>
            <div>Friday 10AM - 10PM</div>
            <div>Saturday 10AM - 10PM</div>
            <div>Sunday 10AM - 10PM</div>
          </div>
          <button class="custom-button">Order Now</button>
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
