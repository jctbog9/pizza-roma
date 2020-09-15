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
      <div class="order">
        <a :href="`tel:${6179249595}`">
          <div class='phone-number'> 
            <font-awesome-icon icon="phone"/> (617) 924-9595 
          </div>
        </a>
      </div>
      <a :href="`tel:${6179249595}`">
        <button class="call-button">Call Now</button>
      </a>
    </div>
  </div>
</template>

<script>
import ContactInfo from '../components/ContactInfo'

export default {

}
</script>

<style>
.background-section {
  background-color: #ffffff;
  width: 80%;
  margin: auto;
  margin-bottom: 50px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  background-color: #E0BB34;
  margin: auto;
  font-size: 16px;
}

.contact-section {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: space-evenly;
  height: 680px;
}

.outside-image {
  height: 480px;
  width: 390px;
  margin: 40px 0px 0px 40px;
}

.store-info-section {
  margin: 40px 40px 0px 0px;
}

.call-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.order {
  margin: auto;
  justify-content: center;
  align-items: center;
}

.phone-number {
  font-size: 23px;
  color: #000000;
}

.call-button {
  margin: 15px 0px 45px 0px;
  padding: 20px;
  background-color: #DDB833;
  border: none;
  color: #000000;
  border-radius: 2px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.cursive {
  font-family: 'Dancing Script', cursive;
}

</style>