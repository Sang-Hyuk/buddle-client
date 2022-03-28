<template>
  <v-container fluid style="padding: 0px;">
    <v-card outlined>
      <v-row>
        <v-col style="padding: 0px;">
          <v-card>
            <v-carousel
                cycle
                hide-delimiters
                height="750"
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
    <v-container class="mt-10">
      <v-row class="mb-12" justify="center">
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner01.png'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">분유제조기</p>
          <p style="font-size: 15px; margin-top: 10px;">엄마와 아빠의 마음을 생각하며 육아하는 <br> 엄마 아빠가 함께 만든 분유제조기.</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner02.png'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">실리콘 흡착 식기</p>
          <p style="font-size: 15px; margin-top: 10px;">감성적인 디자인과 최고급 소재로 아이를 <br> 생각하며 만든 실리콘 흡착 식기.</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner03.png'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">버들 친환경 가구</p>
          <p style="font-size: 15px; margin-top: 10px;">아이를 생각한 친환 소재와 국내 제조로 <br> 깐깐하게 만들었습니다.</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner04.png'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">Q&A</p>
          <p style="font-size: 15px; margin-top: 10px;">어떠한 궁금증도 상식에 맞는 답변을 드리는데 <br> 최선을 다하겠습니다.</p>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="mt-10">
      <v-row justify="center">
        <v-col class="text-center">
          <v-card style="background-color: black;">
            <v-col class="text-center">
              <p class="text-center" style="color: white; font-size: 20px; font-weight: 400;">BUDDLE <strong>DESIGN</strong></p>
              <p class="text-center" style="color: white; font-size: 54px; font-weight: 400;">
                <strong>Mom's </strong>Life
                <strong style="color: darkgoldenrod">Balance</strong>
              </p>
              <p class="text-center" style="color: white; font-size: 18px; font-weight: 400;">www.buddle.kr</p>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
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
