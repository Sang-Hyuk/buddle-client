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
      {title:'Company', icon:'mdi-view-dashboard', to:'/company'},
      {title:'Business', icon:'mdi-view-dashboard', to:'/business'},
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

