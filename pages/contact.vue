<template>
  <div>
<!-- Desktop Section -->
    <div class="is-hidden-touch background-section">
      <div class="title-container">
        <h1 class="cursive">Contact & Directions</h1>
        <h4><font-awesome-icon icon="phone"/> (617) 924-9595</h4>
      </div>
      <div class="contact-section">
        <div class="outside-image-container">
          <img class="outside-image" src="outside2.jpg">
        </div>
        <contact-info />
      </div>
      <div class="call-section">
        <div class="store-rules">
          <h1>Pickup Only</h1>
        </div>
        <div class="store-rules">
          <h1>Cash Only</h1>
        </div>
      </div>
      <div class="pizza-image-container">
        <img class="pizza-image" src="pizza.jpg">
        <a :href="`tel:${6179249595}`">
          <button class="custom-button bottom-buffer">
            <font-awesome-icon icon="phone"/> (617) 924-9595
          </button>
        </a>
      </div>
    </div>

<!-- Mobile Section -->
    <div class="is-hidden-desktop background-section-mobile">
      <div class="title-container">
        <h1 class="cursive">Contact & Directions</h1>
      </div>
      <div class="outside-CTA">
        <div class="outside-image-container-mobile">
          <img class="outside-image" src="outside2.jpg">
        </div>
        <div class="floating-button-container">
          <a class="floating-button" :href="`tel:${6179249595}`">
            <button class="custom-button">
              <font-awesome-icon icon="phone"/> (617) 924-9595
            </button>
          </a>
        </div>
      </div>
      <div class="contact-section-mobile">
        <div class="store-info-section">
          <div class="call-section-mobile">
            <div class="store-rules">
              <h1>Pickup Only</h1>
            </div>
            <div class="store-rules">
              <h1>Cash Only</h1>
            </div>
          </div>
          <contact-info />
        </div>
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
@keyframes blinker { to { opacity: 0; } }

.background-section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

.background-section-mobile {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  justify-content: space-evenly;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #E0BB34;
  font-size: 16px;
  width: 100%;
  margin-bottom: 40px;
}

.contact-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 40px;
  width: 100%;
}

.contact-section-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
}

.outside-image-container {
  width: 300px;
  overflow: hidden;
}

.outside-CTA {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 520px;
  margin-bottom: 40px;
}

.floating-button-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 520px;
}

.floating-button {
  position: relative;
  margin-bottom: 20px;
}

.outside-image-container-mobile {
  width: 320px;
  overflow: hidden;
  position: absolute;
}

.outside-image {
  height: 520px;
}

.call-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background-color: #d3965e;
  padding: 30px;
  align-items: center;
}

.call-section-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.store-rules {
  animation: blinker 1.7s cubic-bezier(.5, 0, 1, 1) infinite alternate;  
}

.pizza-image-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
}

.pizza-image {
  width: 60%;
  margin-bottom: 40px;
  margin-top: 40px;
}
</style>
