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

    <!--  회사소개  -->
    <v-container class="mt-4">
      <v-row class="mb-12">
        <v-col>
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray;">회사소개
            <span style="font-size: 18px;">About Buddle</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="left">
        <v-col>
          <p class="text-left" style="font-size: 28px;">육아, 걱정마세요.<br>이제 버들이 함께합니다.</p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/ceo.png'></v-img></v-card>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center">
          <p class="text-left" style="font-size: 20px; font-weight: 500; color: saddlebrown">저출산과 맞벌이 부부 증가라는 환경변화 속에서 육아 생활에 보다 나은 보탬을 드리기 위해
            <br>육아 관련 재품 전문회사, 버들은 부모된 마음으로 최선의 노력을 다 하고 있습니다.
          </p>
          <p class="text-left" style="font-size: 15px;">국내외 R&D회사와 협업을 통한 끊임없는 연구개발을 진행하며 축적된 최고의 기술을 바탕으로 변화되는 시대에 부응하는,
            <br>즐거운 육아 생활을 위한 제품을 개발 공급하고 있습니다.
            <br>완성된 버들 제품은 집안의 작은 변화에도 가정에 웃을을 줄 수 있는 동반자 될 것입니다.
          </p>
          <p class="text-left" style="font-size: 15px; color: saddlebrown">우리 아이와 더 많은 시간을 공유하고, 아이의 건강한 성장을 위해 버들이 함께 하겠습니다.
          </p>
          <br><br>
          <p class="text-right" style="font-size: 28px; font-weight: 500; font-family: 'Nanum Pen Script'">주식회사 버들</p>
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
