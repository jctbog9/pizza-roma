<template>
  <div class="background-section">
    <div class="title">
      <h1 class="cursive">Contact & Directions</h1>
      <h4><font-awesome-icon icon="phone"/> (617) 924-9595</h4>
    </div>
    <div class="contact-section">
      <div class="outside-image">
        <img src="outside2.jpg">
      </div>
      <div class="store-info-section">
        <contact-info />
      </div>
    </div>
    <div class="call-section">
      <div class="store-rules">
        <h1>No Delivery</h1>
      </div>
      <a class="phone-number" :href="`tel:${6179249595}`">
        <font-awesome-icon icon="phone"/> (617) 924-9595 
      </a>
      <div class="store-rules">
        <h1>Cash Only</h1>
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
.background-section {
  background-color: #ffffff;
  width: 80%;
  margin: auto;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #E0BB34;
  font-size: 16px;
}

.contact-section {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-evenly;
  padding: 40px;
}

.outside-image {
  width: 320px;
}

.call-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 40px;
}

.store-rules {
  animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}
@keyframes blinker { to { opacity: 0; }
}

.phone-number {
  font-size: 24px;
  color: #000000;
}

</style>
