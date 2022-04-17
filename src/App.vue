<template>
  <v-app>
    <v-app-bar
        app
        elevation="0"
        style="background-color: white;"
    >
      <!--  side menu star  -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-none d-flex d-sm-flex d-md-flex d-lg-none">
        <v-menu
            bottom
            left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
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
                href="/as"
            >
              <span class="mr-2">A/S신청</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                href="/ascheck"
            >
              <span class="mr-2">A/S신청확인</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                href="/product-auth"
            >
              <span class="mr-2">정품등록</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                href="/authcheck"
            >
              <span class="mr-2">정품등록확인</span>
            </v-btn>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
      <!--  side menu end  -->

      <v-row align="center"
             justify="space-around"
             no-gutters
      >
        <v-btn text>
<!--          <v-img-->
<!--              alt="Buddle Logo"-->
<!--              class="shrink mr-2"-->
<!--              containn-->
<!--              src="@/assets/logo.png"-->
<!--              transition="scale-transition"-->
<!--              width="200"-->
<!--              @click="goToHome()"-->
<!--              dark-->
<!--          />-->
          <v-img
              alt="Buddle Logo"
              class="shrink mr-2"
              containn
              src="@/assets/logo.png"
              transition="scale-transition"
              width="200"
              dark
          />
        </v-btn>

<!--        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="d-none d-lg-flex d-xl-flex d-none"
                elevation="0"
                style="font-family: 'Noto Sans Adlam'; font-size: 16px;"
            >
              버들소개
            </v-btn>
          </template>
          <br><br>
          <v-list elevation="0">
            <v-list-item
                v-for="item in info"
                :key="item.title"
                :to="item.to"
                elevation="0"
                color="white"
            >
              <v-btn class="d-none d-lg-flex d-xl-flex d-none" text v-text="item.title" style="font-family: 'Noto Sans Adlam'; font-size: 14px; color: black; margin-left: -15px;">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>-->
<!--        <v-menu open-on-hover top offset-y>-->
<!--          <template v-slot:activator="{ attrs, on }">-->
<!--            <v-btn-->
<!--                text-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                class="d-none d-lg-flex d-xl-flex d-none"-->
<!--                elevation="0"-->
<!--                style="font-family: 'Noto Sans Adlam'; font-size: 16px;"-->
<!--            >-->
<!--              제품-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <br><br>-->
<!--          <v-list elevation="0">-->
<!--            <v-list-item-->
<!--                v-for="item in product"-->
<!--                :key="item.title"-->
<!--                :to="item.to"-->
<!--                elevation="0"-->
<!--                color="white"-->
<!--            >-->
<!--              <v-btn class="d-none d-lg-flex d-xl-flex d-none" text v-text="item.title" style="color: black; margin-left: -15px; font-family: 'Noto Sans Adlam'; font-size: 14px;">-->
<!--              </v-btn>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--        </v-menu>-->
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="d-none d-lg-flex d-xl-flex d-none"
                elevation="0"
                style="font-family: 'Noto Sans Adlam'; font-size: 16px;"
            >
              고객서비스
            </v-btn>
          </template>
          <br><br>
          <v-list elevation="0">
            <v-list-item
                v-for="item in service"
                :key="item.title"
                :to="item.to"
                elevation="0"
                color="white"
            >
              <v-btn class="d-none d-lg-flex d-xl-flex d-none" text v-text="item.title" style="font-family: 'Noto Sans Adlam'; font-size: 14px; color: black; margin-left: -15px;">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
                text
                v-bind="attrs"
                v-on="on"
                class="d-none d-lg-flex d-xl-flex d-none"
                elevation="0"
                style="font-family: 'Noto Sans Adlam'; font-size: 16px;"
            >
              정품등록
            </v-btn>
          </template>
          <br><br>
          <v-list elevation="0">
            <v-list-item
                v-for="item in itemreg"
                :key="item.title"
                :to="item.to"
                elevation="0"
                color="white"
            >
              <v-btn class="d-none d-lg-flex d-xl-flex d-none" text v-text="item.title" style="font-family: 'Noto Sans Adlam'; font-size: 14px; color: black; margin-left: -15px;">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

<!--        <v-menu open-on-hover top offset-y>-->
<!--          <template v-slot:activator="{ attrs, on }">-->
<!--            <v-btn-->
<!--                text-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                class="d-none d-lg-flex d-xl-flex d-none"-->
<!--                elevation="0"-->
<!--                style="font-family: 'Noto Sans Adlam'; font-size: 16px;"-->
<!--            >-->
<!--              커뮤니티-->
<!--            </v-btn>-->
<!--          </template>-->
<!--          <br><br>-->
<!--          <v-list elevation="0" style="text-align: left;">-->
<!--            <v-list-item-->
<!--                v-for="item in community"-->
<!--                :key="item.title"-->
<!--                :to="item.to"-->
<!--                elevation="0"-->
<!--                color="white"-->
<!--            >-->
<!--              <v-btn class="d-none d-lg-flex d-xl-flex d-none" text v-text="item.title" style="font-family: 'Noto Sans Adlam'; font-size: 14px; color: black; margin-left: -15px;">-->
<!--              </v-btn>-->
<!--            </v-list-item>-->
<!--          </v-list>-->
<!--        </v-menu>-->
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <br><br>
          <v-list elevation="0">
            <v-btn
                text
                @click="openModal"
                style="font-family: 'Noto Sans Adlam'; font-size: 14px;"
            >
              <span class="mr-2">로그인</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                link
                @click="moveToAdminPage"
                style="font-family: 'Noto Sans Adlam'; font-size: 14px;"
            >
              <span class="mr-2">관리자페이지</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                @click="doLogout"
                style="font-family: 'Noto Sans Adlam'; font-size: 14px;"
            >
              <span class="mr-2">로그아웃</span>
            </v-btn>
          </v-list>
        </v-menu>

        <!-- login modal start  -->
        <v-dialog
            v-model="dialog"
            hide-overlay
            transition="dialog-bottom-transition"
            width="50%"
        >
          <v-card class="md-12">
            <v-toolbar
                dark
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
              <v-toolbar-title>관리자 로그인</v-toolbar-title>
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
                        :type="'password'"
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
                    dark
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
      </v-row>
    </v-app-bar>

<!--  footer  -->
    <v-main>
      <v-container fluid>
        <router-view/>
        <v-footer class="mt-10" style="background-color: white;">
          <v-container>
            <v-row class="mb-12" justify="left" style="margin-bottom:0px !important;">
              <v-col>
                <p>
                  <strong style="font-family: 'Nanum Gothic'; font-size: 14px;">CALL CENTER</strong>
                </p>
                <span style="font-family: 'Nanum Gothic'; font-size: 12px;">
                  <p style="margin-bottom: 0px;">고객센터 : <strong>1566-4489</strong> </p>
                  <p style="margin-bottom: 0px;">상담시간 : AM 10:00 ~ PM 06:00 </p>
                  <p style="margin-bottom: 0px;">카톡상담 : 버들 고객센터 </p>
                </span>
              </v-col>
              <v-col>
                <p>
                  <strong style="font-family: 'Nanum Gothic'; font-size: 14px;">INFORMATION</strong>
                </p>
                <span style="font-family: 'Nanum Gothic'; font-size: 12px;">
                  <p style="margin-bottom: 0px;">상호명 : <strong>주식회사 버들</strong> </p>
                  <p style="margin-bottom: 0px;">대표자명 : 류상완 </p>
                  <p style="margin-bottom: 0px;">주소 : 경기도 광명시 일직로43 C동 2108 </p>
                  <p style="margin-bottom: 0px;">대표전화 : 1566-4489</p>
                </span>
              </v-col>
              <v-col>
                <p>
                  <strong style="font-family: 'Nanum Gothic'; font-size: 14px;">LICENCE</strong>
                </p>
                <span style="font-family: 'Nanum Gothic'; font-size: 12px;">
                  <p style="margin-bottom: 0px;">사업자등록번호 : 623-87-02137 </p>
                  <p style="margin-bottom: 0px;">통신판매신고번호 : 제 2021-경기광명-0530호 </p>
                </span>
              </v-col>
              <v-col>
                <p>
                  <strong style="font-family: 'Nanum Gothic'; font-size: 14px;">WEB MASTER</strong>
                </p>
                <span style="font-family: 'Nanum Gothic'; font-size: 12px;">
                  <p style="margin-bottom: 0px;">e-mail : <strong>buddlemanma@naver.com</strong> </p>
                  <p style="margin-bottom: 0px;">개인정보보호정책 책임자 : 류상완 </p>
                </span>
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
    info: [
      {title:'회사소개', icon:'mdi-view-dashboard', to:'/company'},
      {title:'비전', icon:'mdi-view-dashboard', to:'/vision'},
      {title:'사업소개', icon:'mdi-view-dashboard', to:'/business'},
    ],
    product: [
      {title:'분유제조기', icon:'mdi-view-dashboard', to:'/product'},
      {title:'유아동식기', icon:'mdi-view-dashboard', to:'/product'},
      {title:'친환경가구', icon:'mdi-view-dashboard', to:'/product'},
    ],
    service: [
      // {title:'온라인문의', icon:'mdi-view-dashboard', to:'/product'},
      {title:'A/S신청', icon:'mdi-view-dashboard', to:'/as'},
      {title:'A/S신청확인', icon:'mdi-view-dashboard', to:'/ascheck'},
      // {title:'동영상가이드', icon:'mdi-view-dashboard', to:'/product'},
      // {title:'F&Q', icon:'mdi-view-dashboard', to:'/product'},
    ],
    itemreg: [
      {title:'정품등록', icon:'mdi-view-dashboard', to:'/product-auth'},
      {title:'정품등록확인', icon:'mdi-view-dashboard', to:'/authcheck'},
    ],
    community: [
      {title:'공지사항', icon:'mdi-view-dashboard', to:'/product'},
      {title:'이벤트', icon:'mdi-view-dashboard', to:'/product'},
    ],
    user: [
      {title:'로그인', icon:'mdi-view-dashboard', to:'openModal'},
      {title:'정품등록', icon:'mdi-view-dashboard', to:'/product'},
      {title:'제품등록', icon:'mdi-view-dashboard', to:'/product'},
    ],
    colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
    dialog: false,
    itemDialog: false,
    picker: false,
    message: '',
    number: '',
    form: {
      id: '',
      password: '',
      terms: false,
    },
    rules: {
      id: [val => (val || '').length > 0 || '아이디를 입력하세요.'],
      password: [val => (val || '').length > 0 || '패스워드를 입력하세요.'],
    },
    items: [
      { name: "버들맘마 분유제조기", value: 0}
    ],
    buypath: [
      { name: "네이버", value:0 },
      { name: "쿠팡", value:1 },
      { name: "오프라인 매장", value:2 },
      { name: "기타", value:3 },
    ],
    loginResponse: [
    ],
    show:false
  }),
  computed: {
  },
  return: {
  },
  methods: {
    goToHome() {
      this.$router.push({ path: '/' });
    },
    /* login modal method star */
    openModal() {
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
    async doLogin() {

      try {
        let loginResult = await this.loginCheck()
        console.log(loginResult) // 로그인 성공하면 true, 아니면 false
        console.log(loginResult.data.success);
        if (!loginResult.data.success) {
          alert(loginResult.data.message);
          return;
        } else {
          alert("로그인 되었습니다.");
          sessionStorage.setItem("access_token",loginResult.data.data.access_token)
          console.log(sessionStorage.getItem("access_token"));
          this.$router.go();
        }
      } catch (err) {
        console.error(err)
      }
    },
    loginValidate () {
      return this.$refs.form.validate();
    },
    async loginCheck() {

      if (!this.loginValidate()) {
        return;
      }

      const url = "http://15.165.183.94/v1/user/login";

      let data = {
        "id": this.form.id,
        "password": this.form.password
      }

      return this.$axios.post(url,data,{
        withCredential : true
      });
    },
    doLogout () {
      alert("로그아웃 되었습니다.");
      localStorage.clear();
      sessionStorage.clear();
      this.$router.push({ path: '/' });
    },
    selectFile(file) {
      console.log(file)
      this.itemForm.file = file;
      console.log(this.itemForm.file)
    },
    /* item regit modal method end */

    /* admin page start */
    moveToAdminPage() {
      if (sessionStorage.getItem("access_token") == "" || sessionStorage.getItem("access_token") == null) {
        alert("권한이 없습니다.");
        return;
      }
      this.$router.push({ path: '/admin' });
    },
    /* admin page ent */
  },

};
</script>
<style scoped>
.v-menu__content {
  box-shadow: none;
}
</style>

