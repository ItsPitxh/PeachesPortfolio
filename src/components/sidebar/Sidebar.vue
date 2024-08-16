<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="sidebarContainer">
      <div class="sidebar">
        <div class="item">
          <fa icon="bars" />
          <div>Peach's Port</div>
        </div>
      </div>
  </div>
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
.sidebarContainer {
  position: absolute;
  display: none;
  height: 100vh;
}




.sidebar {
    border: 2px solid rgba(255,255,255,0.5);
  align-items: stretch;
  margin: 2rem;
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  background-image: rgb(255, 255, 255);
  background-image: -moz-linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-image: -webkit-linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-image: linear-gradient(
    315deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#000000",GradientType=1);
  font-family: Inter;
  z-index: 999;
  
}

.item {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 40px;
  color: white;
}
.item > div {
  margin-left: 2rem;
}
</style>
