<template>
  <v-container fluid style="padding: 0px;">
    <v-card outlined>
      <v-row>
        <v-col style="padding: 0px;">
          <v-card>
            <v-carousel
                cycle
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

    <!--  비전  -->
    <v-container class="mt-4">
      <v-row class="mb-12" justify="left">
        <v-col>
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray;">Vision
            <span style="font-size: 18px;">Human Friendly Power Brand</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center">
          <p class="text-left" style="font-size: 20px; font-weight: 500;">버들은 존중, 신뢰, 창조를 기반으로 공감하고 소통하는 즐거운 일터를 토대로 친 인간적인 강력한 브랜드로 성장하는 기업을 목표로 하고 있습니다.
          </p>
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