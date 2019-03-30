<template>
   <div id="slider" style="margin-top:55px">
        <div @click="panahKiri()" class="panahKiri"></div>
    <Slides :gambar="gambars[pilihGambar]"/>
      <div @click="panahKanan()" class="panahKanan"></div>
   

    <Home/>
   </div>
</template>
<script>
import Home from "@/views/General/Home";
import Slides from "./Slides";
import { setInterval, clearInterval } from "timers";
export default {
  components: {
    Slides,
    Home
  },
  data() {
    return {
      pilihGambar: 0,
      intervalObj: null
    };
  },
  computed: {
    gambars() {
      return this.$store.getters.sliders;
    }
  },
  methods: {
    panahKiri() {
      clearInterval(this.intervalObj);
      this.gantiKiri();
      var ini = this;
      this.intervalObj = setInterval(() => {
        ini.gantiKiri();
      }, 4000);
    },
    panahKanan() {
      clearInterval(this.intervalObj);
      this.gantiKanan();
      var ini = this;
      this.intervalObj = setInterval(() => {
        ini.gantiKanan();
      }, 4000);
    },
    gantiKiri() {
      var kuy = this.pilihGambar;
      kuy--;
      if (kuy < 0 ) {
        kuy = (this.gambars.length -1);
      }
      this.pilihGambar = kuy;
    },
    gantiKanan() {
      var kuy = this.pilihGambar;
      kuy++;
      if (kuy >= this.gambars.length) {
        kuy = 0;
      }
      this.pilihGambar = kuy;
    }
  },
  created() {
    var ini = this;
    this.intervalObj = setInterval(() => {
      ini.gantiKanan();
    }, 4000);
  }
};
</script>
<style>
#slider {
}
#slider .panahKanan,
#slider .panahKiri {
  top: 25%;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  border: 20px solid transparent;
}
#slider .panahKiri {
  right: 1%;
  z-index: 1;
  border-left-color: #b3d4fc;
}
#slider .panahKanan {
  left: 1%;
  z-index: 1;
  border-right-color: #b3d4fc;
}
@media only screen and (max-width: 600px) {
  #slider .panahKanan,
  #slider .panahKiri {
    top: 20%;
  }
}
</style>