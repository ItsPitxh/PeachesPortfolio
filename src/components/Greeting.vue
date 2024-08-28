<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Sidebar from "./sidebar/Sidebar.vue";
</script>

<template>
  <Sidebar/>
  <div class="container">
    <div class="mainTitle">
      <h1>HELLO WORLD</h1>
      <h2>RMUTL SE-24</h2>
    </div>
    <button class="scrollDown">
      <fa icon="chevron-down" />
      <span class="hiddenMessage">Learn More</span>
    </button>
  </div>
  <span class="backgroundElement"></span>
</template>

<style scoped>
@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/Inter/static/Inter_24pt-Medium.ttf");
  font-weight: normal;
}
@font-face {
  font-family: "Inter";
  src: url("../assets/fonts/Inter/static/Inter_24pt-Bold.ttf");
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/image/picture.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  z-index: 0;
}

.backgroundElement {
  position: absolute;
  height: 100vh;
  width: 50vw;
  top: 0;
  right: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: rgb(255, 255, 255);
  border-radius: 50%;
  background-image: -moz-radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0) 69%
  );
  background-image: -webkit-radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0) 69%
  );
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 0) 69%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
 
}

.mainTitle {
  width: 730px;
  padding: 0;
  margin-left: -400px;
  margin-top: -100px;
}

.mainTitle > h1 {
  font-family: Inter;
  color: #febe98;
  font-weight: bold;
  margin: 0;
  font-size: 140px;
}
.mainTitle > h2 {
  color: white;
  font-family: Inter;
  margin: 0;
  font-size: 72px;
  margin-top: -40px;
  text-align: end;
}

.scrollDown {
  position: absolute;
  bottom: 6rem;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  background-color: #febe98;
  color: white;
  font-size: 23px;
}

.scrollDown:hover {
  width: 200px;
  background-color: white;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  border-radius: 3rem;
  transition: width 0.2s;
}

.hiddenMessage {
  display: none;
}


.scrollDown:hover > .hiddenMessage{ 
  display: block;
  padding-left : 1rem;
  text-decoration: underline;
}



</style>
