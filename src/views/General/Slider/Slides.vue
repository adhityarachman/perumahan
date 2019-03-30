<template>
  <div id="slides">
    <transition-group name="fade" mode="out-in" tag="div">
      <div class="slideGambar" :style="setGambar" :key="gambar.id"></div>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: ["gambar"],
  computed: {
    setGambar() {
      return {
        backgroundImage: "url(" + this.gambar.url + ")",
        margin: "0  5%"
      };
    }
  }
};
</script>
<style >
#slides {
}
#slides .slideGambar {
  height: 65vh;
  width: 90%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image:url('../assets/images/hero.jpeg') */
}
.fade-enter-active {
  animation-name: muncul;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
.fade-move {
  transition: all 1s;
}
.fade-leave-active {
  animation-name: hilang;
  animation-duration: 2s;
  animation-iteration-count: 1;
  position: absolute;
}
@keyframes muncul {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hilang {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>