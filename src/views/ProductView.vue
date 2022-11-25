<template>
  <v-container fluid style="padding: 0px;">
    <v-card outlined>
      <v-row>
        <v-col style="padding: 0px;">
          <v-card>
            <v-carousel
                hide-delimiters
                height="460"
                width="100%"
            >
              <v-carousel-item
                  v-for="(item,i) in items"
                  :key="i"
                  :src="item.src"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!--  자동 분유제조기  -->
    <v-container class="mt-4">
      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray;">자동 분유제조기
            <span style="font-size: 18px;">Buddle Mamma</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="left">
        <v-col lg="1">
        </v-col>
        <v-col lg="11">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/mamma_01.png'></v-img></v-card>
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/mamma_02_01.png'></v-img></v-card>
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/mamma_02_02.png'></v-img></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import mainImg1 from '../assets/main_metapo01.png';
import mainImg2 from '../assets/main_metapo02.png';
import mainImg3 from '../assets/main_metapo03.png';

export default {
  data () {
    return {
      items: [
        {
          src: mainImg1,
        },
        {
          src: mainImg2,
        },
        {
          src: mainImg3,
        },
      ],
    }
  },
  computed: {
    carouselHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs": return 100
        case "sm": return 200
        case "md": return 300
        case "xl": return 400
        default : return 500
      }
    }
  }
}
</script>