<template>
  <v-app>
    <v-app-bar
        app
        dark
    >
      <!--  side menu star  -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-none d-flex d-sm-flex d-md-flex d-lg-none">
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-btn
                text
                href="/"
            >
              <span class="mr-2">Home</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                href="/company"
            >
              <span class="mr-2">Company</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                href="/company"
            >
              <span class="mr-2">PRODUCT</span>
            </v-btn>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
      <!--  side menu end  -->

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
            class="d-none d-lg-flex d-xl-flex d-none"
        >
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn
            text
            href="/company"
            class="d-none d-lg-flex d-xl-flex d-none"
        >
          <span class="mr-2">Company</span>
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="d-none d-lg-flex d-xl-flex d-none"
            >
              PRODUCT
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="item in product"
                :key="item.title"
                :to="item.to"
                link
            >
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-btn
                text
                @click="openModal"
            >
              <span class="mr-2">로그인</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                @click="openModal"
            >
              <span class="mr-2">정품등록</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                @click="openModal"
            >
              <span class="mr-2">제품등록</span>
            </v-btn>
          </v-list>
        </v-menu>

        <!--  modal start  -->
        <v-dialog
            v-model="dialog"
            hide-overlay
            transition="dialog-bottom-transition"
            width="50%"
        >
          <v-card class="md-12">
            <v-toolbar
                dark
                color="primary"
            >
              <v-toolbar-title>Administrator Login</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                  icon
                  dark
                  @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-form
                ref="form"
                @submit.prevent="submit"
            >
              <v-container fluid>
                <v-row class="md-12">
                  <v-col>
                    <v-text-field
                        v-model="form.id"
                        :rules="rules.id"
                        color="purple darken-2"
                        label="ID"
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12">
                  <v-col>
                    <v-text-field
                        v-model="form.password"
                        :rules="rules.password"
                        color="purple darken-2"
                        label="Password"
                        required
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    type="submit"
                    width="100%"
                    @click="doLogin"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
        <!--  modal end  -->
      </v-row>
    </v-app-bar>

<!--  footer  -->
    <v-main>
      <v-container fluid>
        <router-view/>
        <v-footer class="mt-10">
          <v-container>
            <v-row class="mb-12" justify="left" style="margin-bottom:0px !important;">
              <v-col>
                <p>
                  <strong>CALL CENTER</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>고객센터 : <strong>1566-4489</strong> </li>
                  <li>상담시간 : AM 10:00 ~ PM 06:00 </li>
                  <li>카톡상담 : 버들 고객센터 </li>
                </ul>
              </v-col>
              <v-col>
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
              <v-col>
                <p>
                  <strong>LICENCE</strong>
                </p>
                <ul style="font-size: 13px;">
                  <li>사업자등록번호 : 623-87-02137 </li>
                  <li>통신판매신고번호 : 제 2021-경기광명-0530호 </li>
                </ul>
              </v-col>
              <v-col>
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
    product: [
      {title:'회사소개', icon:'mdi-view-dashboard', to:'/company'},
      {title:'자동 분유제조기', icon:'mdi-view-dashboard', to:'/product'},
    ],
    user: [
      {title:'로그인', icon:'mdi-view-dashboard', to:'openModal'},
      {title:'정품등록', icon:'mdi-view-dashboard', to:'/product'},
      {title:'제품등록', icon:'mdi-view-dashboard', to:'/product'},
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    dialog: false,
    message: '',
    rules: {
      id: [val => (val || '').length > 0 || '아이디를 입력하세요.'],
      password: [val => (val || '').length > 0 || '패스워드를 입력하세요.'],
    },
    form: {
      id: '',
      password: '',
      terms: false,
    },
  }),
  computed: {

  },
  return: {
  },
  methods: {
    openModal() {
      console.log("click?")
      this.dialog = true
    },
    resetForm () {
      this.form = {
        id: '',
        password: '',
        terms: false,
      };
      this.$refs.form.reset()
    },
    submit () {
      this.snackbar = true
      this.resetForm()
    },
    doLogin () {

      console.log(this.form.id);
      console.log(this.form.password);

      this.$axios
          .get("https://alphacashier.co.kr/")
          .then((res) => { console.log(res.staus); console.log(res.data); })
          .catch((error) => { console.log(error); })
          .finally(() => { console.log("항상 마지막에 실행");
          });
    }
  }
};
</script>

