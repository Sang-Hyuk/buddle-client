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
                href="/product"
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
                @click="openItemModal"
            >
              <span class="mr-2">정품등록</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                link
                @click="moveToAdminPage"
            >
              <span class="mr-2">관리자페이지</span>
            </v-btn>
          </v-list>
          <v-list>
            <v-btn
                text
                @click="doLogout"
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

        <!--  정품등록 modal star  -->
        <v-dialog
            v-model="itemDialog"
            hide-overlay
            transition="dialog-bottom-transition"
            width="80%"
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
              <v-toolbar-title>정품 등록</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                  icon
                  dark
                  @click="itemDialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-form
                ref="itemForm"
                @submit.prevent="submit"
            >
              <v-container fluid>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">이름</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                        v-model="itemForm.name"
                        :rules="itemrules.name_rule"
                        color="purple darken-2"
                        label="이름을 입력하세요."
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">핸드폰</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                        v-model="itemForm.phone1"
                        :rules="itemrules.phone1_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                        v-model="itemForm.phone2"
                        :rules="itemrules.phone2_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                        v-model="itemForm.phone3"
                        :rules="itemrules.phone3_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">우편번호</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="5">
                    <v-text-field
                        v-model="itemForm.zipcode"
                        :rules="itemrules.zipcode_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4"
                    class="text-center">
                    <v-btn
                        depressed
                        color="primary"
                        width="100%"
                        height="40px"
                        @click="showApi"
                    >
                      우편번호 찾기
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">주소</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                        v-model="itemForm.addr"
                        :rules="itemrules.addr_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">주소상세</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                        v-model="itemForm.addrdetail"
                        :rules="itemrules.addrdetail_rule"
                        color="purple darken-2"
                        label=""
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">구매제품</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-combobox
                        solo
                        dense
                        label="제품선택"
                        v-model="itemForm.item"
                        :items="items"
                        item-text="name"
                        item-value="value"
                        :rules="itemrules.item_rule"
                    >
                    </v-combobox>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">구매처</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-combobox
                        solo
                        dense
                        label="구매처"
                        v-model="itemForm.purchasepath"
                        :items="buypath"
                        item-text="name"
                        item-value="value"
                        :rules="itemrules.purchasepath_rule"
                    >
                    </v-combobox>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">구매날짜</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-menu
                        ref="menu"
                        v-model="picker"
                        :close-on-content-click="false"
                        :return-value.sync="itemForm.purchasedate"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="itemForm.purchasedate"
                            label="구매날짜"
                            prepend-icon="mdi-calendar"
                            :rules="itemrules.purchasepath_rule"
                            readonly
                            dense
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                          v-model="itemForm.purchasedate"
                          no-title
                          scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="picker = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(itemForm.purchasedate)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row class="md-12" style="height: 65px;">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">정품번호</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <v-text-field
                        v-model="itemForm.authkey"
                        :rules="itemrules.authkey_rule"
                        color="purple darken-2"
                        label="동봉된 정품 등록 카드를 확인하세요."
                        dense
                        outlined
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="md-12">
                  <v-col cols="2">
                    <v-card-text>
                      <p class="text-left font-weight-black">영수증/결제사진</p>
                    </v-card-text>
                  </v-col>
                  <v-col cols="9">
                    <template>
                      <v-file-input
                          color="deep-purple accent-4"
                          counter
                          label="파일선택"
                          multiple
                          placeholder="Select your files"
                          prepend-icon="mdi-paperclip"
                          dense
                          outlined
                          :show-size="1000"
                          @change="selectFile"
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                              v-if="index < 2"
                              color="deep-purple accent-4"
                              dark
                              label
                              small
                          >
                            {{ text }}
                          </v-chip>

                          <span
                              v-else-if="index === 2"
                              class="text-overline grey--text text--darken-3 mx-2"
                          >
                            +{{ itemForm.file.length - 2 }} File(s)
                          </span>
                        </template>
                      </v-file-input>
                    </template>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="md-12" style="height: 75px;">
                  <v-col cols="2"
                      class="text-center"
                      style="width: 150px !important; margin-top: 1%;">
                    <v-checkbox
                        v-model="itemForm.privacy"
                        :rules="itemrules.privacy_rule"
                        label="개인정보 수집 동의"
                        dense
                        required
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="2"
                      class="text-center"
                      style="margin-top: 1%;">
                    <v-btn
                        depressed
                        color="primary"
                        width="100%"
                        height="30%"
                        @click="show = !show"
                    >
                      약관보기
                    </v-btn>
                    <v-col
                        cols="12"
                        class="mt-12"
                    >
                      <v-tooltip
                          v-model="show"
                          top
                          color="primary"
                      >
                        <span> * 제1조 (개인정보 수집에 대한 동의) : 버들(이하 회사)는 이용자들이 회사의 개인정보취급방침 또는 이용약관의 내용에 대하여 “동의”버튼 또는 “취소”버튼을 클릭할 수 있는 절차를 마련하여, “동의”버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.<br>
                               * 제2조 (개인정보 수집항목) : 온라인 문의를 통한 상담을 위해 처리하는 개인정보 항목은 아래와 같습니다. 수집 항목 : 이름, 전화번호, 주소, 구매 관련 이력<br>
                               * 제3조 (개인정보의 이용목적) : 회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 공개하지 않으며, 원활한 고객상담, 각종 서비스의 제공을 위해 아래와 같이 개인정보를 수집하고 있습니다.<br>모든 정보는 상기 목적에 필요한 용도 이외로는 사용되지 않으며 수집 정보의 범위나 사용 목적, 용도가 변경될 시에는 반드시 사전 동의를 구할 것입니다.<br> - 성명 제품 상담에 따른 본인 확인 - 이메일, 전화번호 제품상담 및 이벤트 관련 고지사항 전달, 새로운 서비스 및 신상품 정보 제공(DM, SMS, 이메일 등 이용) 이용자는 개인정보의 수집/이용에 대한 동의를 거부할 수 있습니다.<br>다만, 동의를 거부하는 경우 온라인 문의를 통한 상담은 불가하며 서비스 이용 및 혜택 제공에 제한을 받을 수 있습니다.<br>
                               * 제4조 (개인정보의 보유 및 이용기간) : 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 사용하지 않습니다.<br>&nbsp;그리고 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법렵의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계 법령에서 정한 일정한 기간 동안 정보를 보관합니다.&nbsp;이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br>&nbsp;계약 또는 청약철회 등에 관한 기록 : 5년(전자상거래등에서의 소비자보호에 관한 법률)<br>&nbsp;소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래등에서의 소비자 보호에 관한 법률)<br>&nbsp;시용정보의 수집/처리 및 이용 등에 관한 기록 : 3년(신용정보의 이용 및 보호에 관한 법률) 회사는 귀중한 이용자의 개인정보를 안전하게 처리하며,&nbsp;유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.<br>&nbsp;종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.&nbsp;전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</span>
                      </v-tooltip>
                    </v-col>


                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions style="margin-right: 30%;">
                <v-spacer></v-spacer>
                <v-btn
                    dark
                    type="submit"
                    width="50%"
                    @click="doRegItem"
                >
                  등록
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
        <!--login  modal end  -->
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
      {title:'자동 분유제조기', icon:'mdi-view-dashboard', to:'/product'},
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
    itemForm: {
      name: '',
      phone1: '',
      phone2: '',
      phone3: '',
      zipcode: '',
      addr: '',
      addrdetail: '',
      item: '',
      purchasepath: '',
      purchasedate: '',
      authkey: '',
      file: '',
      privacy: ''
    },
    itemrules: {
      name_rule: [val => (val || '').length > 0 || '이름을 입력하세요.'],
      phone1_rule: [
        val => !!val || '핸드폰 번호를 입력하세요.',
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 3) || '3자리만 입력 가능합니다.',
      ],
      phone2_rule: [
        val => !!val || '번호를 입력하세요.',
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 4) || '4자리만 입력 가능합니다.',
      ],
      phone3_rule: [
        val => !!val || '핸드폰 번호를 입력하세요.',
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 4) || '4자리만 입력 가능합니다.',
      ],
      zipcode_rule: [
        val => !!val || '우편번호를 입력하세요.',
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
      ],
      addr_rule: [val => (val || '').length > 0 || '주소를 입력하세요.'],
      addrdetail_rule: [val => (val || '').length > 0 || '상세 주소를 입력하세요.'],
      item_rule: [val => !!val || '구매제품을 선택하세요.'],
      purchasepath_rule: [val => !!val || '구매처를 선택하세요.'],
      authkey_rule: [val => (val || '').length > 0 || '정품번호를 입력하세요.'],
      file_rule: [val => (val || '').length > 0 || '파일을 등록하세요.'],
      privacy_rule: [
        val => !!val || '개인정보 동의를 체크하세요.'
      ],
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

      const url = "http://3.38.101.67/v1/user/login";

      let data = {
        "id": this.form.id,
        "password": this.form.password
      }

      return this.$axios.post(url,data,{
        withCredential : true
      });
    },
    /* login modal method end */

    /* item regit modal method start */
    openItemModal() {
      /*if (sessionStorage.getItem("access_token") == "" || sessionStorage.getItem("access_token") == null) {
        alert("권한이 없습니다.");
        return;
      }*/
      this.itemDialog = true
    },
    showApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = data.roadAddress;
          // 도로명 주소 변수
          let extraRoadAddr = '';
          // 도로명 조합형 주소 변수
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){
            extraRoadAddr = ' (' + extraRoadAddr + ')';
          }
          // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
          if(fullRoadAddr !== ''){
            fullRoadAddr += extraRoadAddr;
          }
          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          this.itemForm.zipcode = data.zonecode;
          //5자리 새우편번호 사용
          this.itemForm.addr = fullRoadAddr;
        } }).open(
            this.$refs.embed
        )
    },
    doRegItem() {

      if (!this.validate())
        return;

      const url = "http://3.38.101.67/v1/product-regist";

      const formData = new FormData();
      formData.append("name", this.itemForm.name);
      formData.append('phone', this.itemForm.phone1 + '-' + this.itemForm.phone2 + '-' + this.itemForm.phone3);
      formData.append('addr', this.itemForm.addr);
      formData.append('addr_detail', this.itemForm.addrdetail);
      formData.append('market_type', this.itemForm.purchasepath.value);
      formData.append('purchase_date', this.itemForm.purchasedate+'T00:00:00Z');
      formData.append('receipt', this.itemForm.file[0]);
      formData.append('serial_no', this.itemForm.authkey);
      formData.append('product_type', this.itemForm.item.value);

      const config = {
        method: 'post',
        url: url,
        data: formData,
        headers: {
          "Content-Type": 'multipart/form-data',
        }
      }

      this.$axios.request(config)
          .then(res => {
            console.log(res.data);
            alert(res.data.data.message);
          }).catch(err => {
            console.log(err.response);
          });
    },
    validate () {
      return this.$refs.itemForm.validate();
    },
    doLogout () {
      alert("로그아웃 되었습니다.");
      localStorage.clear();
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

