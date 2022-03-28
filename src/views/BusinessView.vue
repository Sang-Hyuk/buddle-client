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

    <!--  사업소개  -->
    <v-container class="mt-4">
      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray;">사업소개
            <span style="font-size: 18px;">Business</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="left">
        <v-col>
          <p class="text-left" style="font-size: 28px;">행복한 육아의 시작!<br>이제 버들이 함께합니다.</p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-col class="text-center">
          <v-card style="margin-bottom: 10px;"><v-img src='../assets/business_img01.png'></v-img></v-card>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-col class="text-left">
          <v-toolbar flat>
            <p class="text-center" style="color: brown; font-size: 21px; font-weight: bold;">버들 육아 가전</p>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-banner single-line:sticky="sticky">
            버들 육아 가전은 안정성과 정확성을 바탕으로 부모된 마음으로 즐겁게 육아를 할 수 있도록 끊임없이 노력하고 있습니다.<br>
            이제는 육아 필수템이 된 기존의 스마트 분유제조리를 업그레이드하여 조유, 세척, 살균, 건조 4단계를 단 한번의 터치로<br>
            편의성, 청결, 안전성 3가지를 동시에 충족 시켰습니다.<br> 나아가 AI육아 가전을 실현시켜 각 부모들의 상황에 맞게 편의성을
            극대화시켜 가정의 행복에 버들 육아 가전은 앞으로도<br> 아기와 부모를 위해 육아 혁신의 중심이 되겠습니다.
          </v-banner>
          <v-toolbar flat>
            <p class="text-center" style="color: brown; font-size: 21px; font-weight: bold;">버들 생활 용품</p>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-banner single-line:sticky="sticky">
            엄마와 아이의 마음을 사로잡는 트랜디한 디자인. 안전과 위생을 최우선으로 감성과 편안함을 담은 생활용품을 선보입니다.<br>
          </v-banner>
          <v-toolbar flat>
            <p class="text-center" style="color: brown; font-size: 21px; font-weight: bold;">버들 가구</p>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-banner single-line:sticky="sticky">
            버들 가구의 모든 소재는 자작나무로 국내에서 수작업 생산되며, 공간 활용 설계와 심플한 디자인은 버들의 최대 경쟁력입니다.<br>
            고객 맞춤형, 다목적, 친환경 가구로 버들이 고객의 삶의 질을 높여 드리겠습니다.
          </v-banner>
          <v-toolbar flat>
            <p class="text-center" style="color: brown; font-size: 21px; font-weight: bold;">버들 의류</p>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-banner single-line:sticky="sticky">
            사랑스러운 우리 아이들의 건강과 편안함, 아름다움을 고려한 스타일링으로 특별한 버들만의 의류를 매치해보세요.
          </v-banner>
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