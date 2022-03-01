<template>
  <v-app>
    <v-app-bar
        app
        dark
    >
<!--      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>-->

      <v-row align="center"
             justify="space-around"
             no-gutters
      >
        <v-img
            alt="Buddle Logo"
            class="shrink mr-2"
            containn
            src="@/assets/logo.png"
            transition="scale-transition"
            width="200"
            dark
        />
        <v-btn
            text
            href="/"
        >
          <span class="mr-2">Home</span>
        </v-btn>

        <v-menu
            v-for="([text]) in btns"
            :key="text"
            offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
            >
              {{ text }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="item in companys"
                :key="item.title"
                :to="item.to"
                link
            >
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list>

        </v-menu>

      </v-row>
    </v-app-bar>

<!--    <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        dark-->
<!--        app-->
<!--        :src="require('@/assets/sidebar.jpg')"-->
<!--    >-->
<!--      <template-->
<!--        v-slot:img="props"-->
<!--      >-->
<!--        <v-img-->
<!--            :gradient="gradient"-->
<!--            v-bind="props"-->
<!--        />-->

<!--      </template>-->
<!--      <v-list-item>-->
<!--        <v-list-item-content>-->
<!--          <v-list-item-title class="text-h6">-->
<!--            Buddle-->
<!--          </v-list-item-title>-->
<!--          <v-list-item-subtitle>-->
<!--            buddle-->
<!--          </v-list-item-subtitle>-->
<!--        </v-list-item-content>-->
<!--      </v-list-item>-->

<!--      <v-divider></v-divider>-->

<!--      <v-list-->
<!--          dense-->
<!--          nav-->
<!--      >-->
<!--        <v-list-item-->
<!--            v-for="item in items"-->
<!--            :key="item.title"-->
<!--            link-->
<!--            :to="item.to"-->
<!--            active-class="primary"-->
<!--            class="py-1"-->
<!--        >-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-icon>-->

<!--          <v-list-item-content>-->
<!--            <v-list-item-title>{{ item.title }}</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <v-main>
      <v-container fluid>
        <router-view/>
        <v-footer class="mt-10">
          <v-container>
            <v-row class="mb-12" justify="left" style="margin-bottom:0px !important;">
              <v-col lg="3">
                <p>
                  <strong>CALL CENTER</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>고객센터 : <strong>1566-4489</strong> </li>
                  <li>상담시간 : AM 10:00 ~ PM 06:00 </li>
                  <li>카톡상담 : 버들 고객센터 </li>
                </ul>
              </v-col>
              <v-col lg="3">
                <p>
                  <strong>INFORMATION</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>상호명 : <strong>주식회사 버들</strong> </li>
                  <li>대표자명 : 류상완 </li>
                  <li>주소 : 경기도 광명시 일직로43 C동 2108 </li>
                  <li>대표전화 : 1566-4489</li>
                </ul>
              </v-col>
              <v-col lg="3">
                <p>
                  <strong>LICENCE</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>사업자등록번호 : 623-87-02137 </li>
                  <li>통신판매신고번호 : 제 2021-경기광명-0530호 </li>
                </ul>
              </v-col>
              <v-col lg="3">
                <p>
                  <strong>WEB MASTER</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>e-mail : <strong>buddlemanma@naver.com</strong> </li>
                  <li>개인정보보호정책 책임자 : 류상완 </li>
                </ul>
              </v-col>
            </v-row>
            <p class="text-no-wrap" style="margin-bottom: 1px; color:red; font-size: 13px;">모든 컨텐츠의 무단복제 및 재판매를 금지합니다.</p>
            <p class="text-no-wrap" style="margin-bottom: 0px; font-size: 13px;">Copyright(c) 2022 by <strong>buddle</strong> All Rights Reserved. Designed by buddle.kr</p>
          </v-container>
        </v-footer>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    gradient: 'rgba(0,0,0,.7), rgba(0,0,0,.7)',
    companys: [
      {title:'회사소개', icon:'mdi-view-dashboard', to:'/company'},
      {title:'자동 분유제조기', icon:'mdi-view-dashboard', to:'/product'},
    ],
    btns: [
      ['Company'],
      ['Business'],
      ['Product'],
      ['Customer'],
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    // products: [
    //   {title:'자동분유제조기', icon:'mdi-view-dashboard', to:'/product1'},
    //   {title:'이유식용품', icon:'mdi-view-dashboard', to:'/product2'},
    // ],
    // customers: [
    //   {title:'제품등록', icon:'mdi-view-dashboard', to:'/product-registration'},
    //   {title:'공지사항', icon:'mdi-view-dashboard', to:'/announcement'},
    //   {title:'질문과 답변', icon:'mdi-view-dashboard', to:'/qna'},
    // ],
  }),
};
</script>

