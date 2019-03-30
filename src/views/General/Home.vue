<template>
  <div>
    <v-img height="450" src="https://alpha-ecommerce.vuetifyjs.com/img/banner.ed54c86f.png">
      <v-layout :style="mobile?'background:rgba(255, 255, 255, 0.8) none repeat scroll 0% 0%;':''" align-center fill-height>
        <v-flex lg4 md5 offset-md6 offset-lg7 text-xs-center>
          <h1 class="display-3 font-weight-light text-uppercase">
            <div >Citra.</div>
            <div>Maja. Raya.</div>
          </h1>
        <v-divider class="primary--text mx-5 my-4 "  light></v-divider>
        <div class="secondary--text headline">
          <div class="font-weight-light judulSub">
            Rediscover the comfort of your couch.
          </div>
          <div class="judulSub">
            Rediscover the comfort of your couch.
          </div>
        </div>
        </v-flex>
      </v-layout>
    </v-img>
     <v-container>
 
    
 <div class="white">
   <v-container py-5>
     <v-container grid-list-xl pa-0 mb-5>
          <v-layout justify-center >
    
      <v-flex xs12 sm7 >
        <h2 data-aos="fade-in" :class="`heading ${textCenter} font-weight-bold `">{{welcome.title}}</h2>
        <p :class="`${textCenter}`">
          <img
            
            :src="welcome.line"
            width="80"
            height="2"
            style="visibility: visible; "
          >
        </p>
        <v-container grid-list-xl pa-0 mb-5>
          <p data-aos="fade-in" :class="`${textCenter} font-weight-regular`">{{welcome.text}}</p>
        </v-container>
      </v-flex>
    </v-layout>
     </v-container>
      <v-container grid-list-xl pa-0 mb-5>
           <h2 data-aos="fade-in" data-aos-delay="300" :class="`heading ${textCenter} font-weight-black`">{{promo.title}}</h2>
        <p :class="`${textCenter}`">
          <img
            :src="promo.line"
            width="60"
            height="2"
            style="visibility: visible; "
          >
        </p>
        <v-layout wrap>
          <v-flex xs12 md4 v-for="(item, index) in 3" :key="index">
           
               <v-card  sheet light elevation-8>
              <div pa-3 class="zoom-effect-container" >
                <v-img class="image-card" src="https://alpha-ecommerce.vuetifyjs.com/img/tablets.812da85f.png">

                </v-img>
                <div class="primary text-xs-center white--text  py-3" >
            Tablets
          </div>
              </div>
            </v-card>
         
          </v-flex>
        </v-layout>
           <!-- <v-layout mt-5 justify-center>
      <v-flex xs12 sm7>
        <h2 data-aos="fade-in" data-aos-delay="300" :class="`heading ${textCenter} font-weight-black`">{{promo.title}}</h2>
        <p :class="`${textCenter}`">
          <img
            :src="promo.line"
            width="60"
            height="2"
            style="visibility: visible; "
          >
        </p>
            fas
      </v-flex>
    </v-layout> -->
      </v-container>
   </v-container>
 </div>
    <v-layout row wrap>
     
      
    </v-layout>
  </v-container>
  </div>
</template>

<script>

export default {
  mounted(){
  addEventListener('resize', () => {
    this.mobile = innerWidth <= 700
  })
},

  data() {
    
    return {
     mobile:window.innerWidth <= 700,
      textCenter: "text-md-center text-xs-center text-sm-center",
      welcome: {
        title: "Welcome To Citra Maja Raya",
        line: require("@/assets/tools/line.png"),
        text:
          "Citra Maja Raya merupakan salah satu proyek terbesar Grup Ciputra dengan luas area pengembangan sebesar 2.600 hektar di Maja, Lebak, Banten. Dalam master plan-nya, Citra Maja Raya didedikasikan sebagai kota baru terpadu dan lengkap, sebagai upaya untuk mendorong penggunaan moda transportasi masal. Keberadaan Stasiun Maja sebagai simpul transportasi masal commuter line menjadi pendukung bagi mobilitas para penghuni kedepannya. Kini, Citra Maja Raya telah memasuki tahap pembangunan lebih dari 15.000 unit rumah dan ritel outlet. Juga direncanakan pembangunan fasilitas kota lainnya seperti area komersial, perkantoran, pasar modern, fasilitas rekreasi, sekolah, ruang terbuka, dan sarana publik lainnya."
      },
      promo: {
        title: "Hot Promo !",
        line: require("@/assets/tools/line.png"),
        text:
          "Citra Maja Raya merupakan salah satu proyek terbesar Grup Ciputra dengan luas area pengembangan sebesar 2.600 hektar di Maja, Lebak, Banten. Dalam master plan-nya, Citra Maja Raya didedikasikan sebagai kota baru terpadu dan lengkap, sebagai upaya untuk mendorong penggunaan moda transportasi masal. Keberadaan Stasiun Maja sebagai simpul transportasi masal commuter line menjadi pendukung bagi mobilitas para penghuni kedepannya. Kini, Citra Maja Raya telah memasuki tahap pembangunan lebih dari 15.000 unit rumah dan ritel outlet. Juga direncanakan pembangunan fasilitas kota lainnya seperti area komersial, perkantoran, pasar modern, fasilitas rekreasi, sekolah, ruang terbuka, dan sarana publik lainnya."
      },
      }
    
  }
}
</script>

<style scoped>
.judulSub {
  color:#ac7904 !important;
  caret-color: #ac7904 !important;
}

.image-card  {
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  cursor: pointer;
}

.zoom-effect-container:hover .image-card   {
  -webkit-transform: scale(1.28);
  transform: scale(1.28);
}
</style>
