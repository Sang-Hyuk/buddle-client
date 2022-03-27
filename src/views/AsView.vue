<template>
  <v-container fluid>
    <v-container class="mt-4">
      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray;">A/S 신청
            <span style="font-size: 18px;">아래 신청서를 작성해 주세요.</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" justify="center">
        <v-form
            ref="itemForm"
            @submit.prevent="submit"
        >
          <v-row class="md-12" style="height: 65px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">이름</p>
              </v-card-text>
            </v-col>
            <v-col cols="9">
              <v-text-field
                  v-model="asForm.name"
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
                  v-model="asForm.phone1"
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
                  v-model="asForm.phone2"
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
                  v-model="asForm.phone3"
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
                  v-model="asForm.zipcode"
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
                  v-model="asForm.addr"
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
                  v-model="asForm.addrdetail"
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
                  v-model="asForm.item"
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
                  v-model="asForm.purchasepath"
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
                  :return-value.sync="asForm.purchasedate"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="asForm.purchasedate"
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
                    v-model="asForm.purchasedate"
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
                      @click="$refs.menu.save(asForm.purchasedate)"
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
                <p class="text-left font-weight-black">첨부파일1</p>
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
                            +{{ asForm.file1.length - 2 }} File(s)
                          </span>
                  </template>
                </v-file-input>
              </template>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 65px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">첨부파일2</p>
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
                            +{{ asForm.file2.length - 2 }} File(s)
                    </span>
                  </template>
                </v-file-input>
              </template>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 65px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">첨부파일3</p>
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
                            +{{ asForm.file3.length - 2 }} File(s)
                          </span>
                  </template>
                </v-file-input>
              </template>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 65px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">첨부파일4</p>
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
                            +{{ asForm.file4.length - 2 }} File(s)
                          </span>
                  </template>
                </v-file-input>
              </template>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 65px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">첨부파일5</p>
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
                            +{{ asForm.file5.length - 2 }} File(s)
                          </span>
                  </template>
                </v-file-input>
              </template>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 200px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-left font-weight-black">문의사항</p>
              </v-card-text>
            </v-col>
            <v-col cols="9">
              <v-textarea
                  v-model="asForm.contents"
                  solo
                  name="input-7-4"
                  label="문의사항"
                  outlined
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="md-12">
            <v-col cols="5">
            </v-col>
            <v-col cols="4">
              <v-btn
                  dark
                  type="submit"
                  width="50%"
                  @click="doRegAfterService"
              >
                확인
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-row>

    </v-container>
  </v-container>
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
    ascenter: [
      {title:'A/S 신청', icon:'mdi-view-dashboard', to:'/as'},
      {title:'A/S 신청확인', icon:'mdi-view-dashboard', to:'/as-check'},
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
    asForm: {
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
      file1: '',
      file2: '',
      file3: '',
      file4: '',
      file5: '',
      privacy: '',
      contents: '',
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

      const url = "http://15.165.183.94/v1/user/login";

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
          this.asForm.zipcode = data.zonecode;
          //5자리 새우편번호 사용
          this.asForm.addr = fullRoadAddr;
        } }).open(
          this.$refs.embed
      )
    },
    doRegAfterService() {
      if (!this.validate())
        return;

      const url = "http://15.165.183.94/v1/product-regist";

      const formData = new FormData();
      formData.append("name", this.asForm.name);
      formData.append('phone', this.asForm.phone1 + '-' + this.asForm.phone2 + '-' + this.asForm.phone3);
      formData.append('addr', this.asForm.addr);
      formData.append('addr_detail', this.asForm.addrdetail);
      formData.append('product_type', this.asForm.item.value);
      formData.append('market_type', this.asForm.purchasepath.value);
      formData.append('purchase_date', this.asForm.purchasedate+'T00:00:00Z');
      formData.append('file1', this.asForm.file1[0]);
      formData.append('file2', this.asForm.file2[0]);
      formData.append('file3', this.asForm.file3[0]);
      formData.append('file4', this.asForm.file4[0]);
      formData.append('file5', this.asForm.file5[0]);

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
            alert(res.data.message);
            this.$router.push({ path: '/' });
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
      sessionStorage.clear();
      this.$router.push({ path: '/' });
    },
    selectFile(file) {
      console.log(file)
      this.asForm.file = file;
      console.log(this.asForm.file)
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