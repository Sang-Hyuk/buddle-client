<template>
  <v-container fluid style="padding: 0px;">
    <v-card outlined>
      <v-row>
        <v-col style="padding: 0px;">
          <v-card>
            <v-carousel
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
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner01.jpeg'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">분유제조기</p>
          <p style="font-size: 15px; margin-top: 10px;">엄마와 아빠의 마음을 생각하며 육아하는 <br> 엄마 아빠가 함께 만든 분유제조기.</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner02.jpeg'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">실리콘 흡착 식기</p>
          <p style="font-size: 15px; margin-top: 10px;">감성적인 디자인과 최고급 소재로 아이를 <br> 생각하며 만든 실리콘 흡착 식기.</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner03.jpeg'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">버들 4 in One 스마트 초퍼</p>
          <p style="font-size: 15px; margin-top: 10px;">이유식, 간식 준비 이제 걱정하지마세요.<br> 다지기, 슬라이서, 거품기를 한번에 올인원 버들 차퍼</p>
        </v-col>
        <v-col lg="3" class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/banner04.jpeg'></v-img></v-card>
          <p class="text-center" style="color: brown; font-size: 20px; font-weight: bold;">LED 온도표시 이유식스푼</p>
          <p style="font-size: 15px; margin-top: 10px;">온도 확인을 위해 직접 먹어보고 확인하는 방법은 교차 감염의 원인이 됩니다.<br> 터치 한번으로 쉽게 온도를 확인 할 수있는 버들 온도 감지 스푼</p>
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
