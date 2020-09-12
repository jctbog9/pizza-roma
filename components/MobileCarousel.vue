<template>
  <div>
    <div class="carousel-container">
      <img :src="slides[slide]">
    </div>
    <div class="mobile-arrows">
      <div class="arrow" v-on:click="previousPage">
        <font-awesome-icon size="3x" icon="arrow-alt-circle-left"/>
      </div>
      <div class="counter">
        <div class="counters-container">
          <div v-for="image in slides">
            <font-awesome-icon v-if="slide === slides.indexOf(image)" icon="dot-circle"/>
            <font-awesome-icon v-else icon="circle"/>
          </div>
        </div>
      </div>
      <div class="arrow" v-on:click="nextPage">
        <font-awesome-icon size="3x" icon="arrow-alt-circle-right"/>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '../static/inside2.jpg'
import Image2 from '../static/pizza.jpg'
import Image3 from '../static/outside.jpg'
import Image4 from '../static/sub.jpg'
import Image5 from '../static/joe-work.jpg'

export default {
  name: 'MobileCarousel',
  data() {
    return {
      slide: 0,
      slides: [Image, Image2, Image3, Image4, Image5],
      stopTimer: false
    }
  },
  methods: {
    incrementPages() {
      setTimeout(() => {
        if(this.stopTimer === false) {
          if (this.slide === this.slides.length - 1) {
            this.slide = 0
          } else {
            this.slide += 1
          }
          this.incrementPages()
        }
      }, 5000)
    },
    previousPage() {
      if (this.slide > 0) {
        this.slide -= 1
        this.stopTimer = true
      }
    },
    nextPage() {
      if (this.slide < this.slides.length - 1) {
        this.slide += 1
        this.stopTimer = true
      }
    }
  },
  created() {
    this.incrementPages()
  }
}
</script>

<style scoped>
.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
  background-color: rgb(115, 115, 167);
}

.arrow:hover {
  cursor: pointer;
  background-color: rgb(77, 77, 122);
}

.counter {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  color: #000000;
}

.counters-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100px;
  padding-bottom: 10px;
}

.mobile-arrows {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 250px;
  width: 375px;
  z-index: 999;
  position: relative;
  margin-top: 10px;
  color: #000000;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 375px;
  overflow: hidden;
  position: absolute;
  margin-top: 10px;
}
</style>
