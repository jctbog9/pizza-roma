<template>
  <div class="CTA-content">
    <img src="/pizzaroma-logo.svg" style="height: 60px;">
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
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style>
.CTA-content {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 520px;
  justify-content: space-evenly;
  background-color: #706f6b;
  padding: 0px 20px 0px 20px;
  border-radius: 2px;
}

.location-info {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 2px;
}
</style>