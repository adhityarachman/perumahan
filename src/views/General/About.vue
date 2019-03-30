<template>
   
   <v-layout row>
    <v-flex>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
    style="margin-top:150px"
      align-center
      column
      justify-center
        class="white--text"
    >
      <h1 class="display-4 font-weight-black mb-3">{{$route.path.replace('/','').toUpperCase()}}</h1>
        <v-layout row wrap>
            
       
       <h5  v-for="info in infos" :key="info.title" class="white--text mt-3  text-xs-center font-weight-medium">{{info.title}}<span class="mr-3 ml-3">{{info.last}}</span></h5>
       </v-layout>
    </v-layout>
  
  </v-parallax>
    <v-container >
 
  <v-timeline>
    <v-timeline-item
      v-for="n in abouts"
      :key="n"
      large
    >

       <template v-slot:opposite>
        <span>{{n.kanan}}</span>
      </template>
        <!--Desktop-->
      <v-card :data-aos="n.nameA" :data-aos-delay="delayA" class="hidden-xs-only elevation-2">
        <v-card-title class="headline">{{n.judul}}</v-card-title>
        <v-card-text>{{n.text}}</v-card-text>
      </v-card>
      <!--Mobile-->
        <v-card data-aos="fade-in" class="hidden-sm-and-up elevation-2">
        <v-card-title class="headline">{{n.judul}}</v-card-title>
        <v-card-text>{{n.text}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>

    
    </v-container>
</v-flex>
</v-layout>
</template>
<script>

export default {
    data() {
      return {
       
        abouts:[
          {nameA:'fade-right',delayA:500,judul:'Lorem ipsum',kanan:'how are you',text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'},
          {nameA:'fade-left',delayA:800,judul:'Lorem ipsum',kanan:'Tus eu perfecto',text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'},
          {nameA:'fade-right',delayA:1100,judul:'Lorem ipsum',kanan:'Tus eu perfecto',text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'},
          {nameA:'fade-left',delayA:1400,judul:'Lorem ipsum',kanan:'Tus eu perfecto',text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'}
        ]
      }
    },
    methods:{
      
    }
}
</script>
<style scoped>

 h1{
   

  font-size: 7em;
  font-weight: 100;
 }
</style>
