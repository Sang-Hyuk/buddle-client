<template>
  <v-container fluid style="min-width: 100%;">
    <!--  관리화면  -->
    <v-container class="mt-4" style="min-width: 90%;">

      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray; margin-bottom: 0px;">관리자 페이지
            <span style="font-size: 18px;">제품등록 및 조회가 가능합니다.</span>
          </p>
        </v-col>
      </v-row>
      <v-row class="mb-12" style="margin-bottom: 0px !important;">
        <v-row class="md-12">
          <v-col cols="1">
            <v-card-text>
              <p class="text-right font-weight-bold" style="color:red">파일업로드</p>
            </v-card-text>
          </v-col>
          <v-col cols="2">
            <template>
              <v-file-input
                  color="deep-purple accent-4"
                  counter
                  label="파일선택"
                  multiple
                  placeholder="Select your files"
                  prepend-icon="mdi-paperclip"
                  outlined
                  dense
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
          <v-col cols="2">
            <v-btn
                depressed
                dark
                width="100%"
                height="65%"
                @click="uploadFile"
            >
              전송
            </v-btn>
          </v-col>
        </v-row>
      </v-row>
      <v-row class="mb-12" justify="left">
        <v-container fluid>
          <v-row class="md-12" style="height: 55px;">
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black">시리얼번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.serial_no"
                  color="purple darken-2"
                  outlined
                  dense
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black">인증상태</p>
              </v-card-text>
            </v-col>
            <v-col cols="2">
              <v-combobox
                  solo
                  dense
                  label="인증상태"
                  v-model="conditionForm.status"
                  :items="authStatus"
                  item-text="name"
                  item-value="value"
              >
              </v-combobox>
            </v-col>
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black">이름</p>
              </v-card-text>
            </v-col>
            <v-col cols="1" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.name"
                  color="purple darken-2"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black">핸드폰번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone"
                  :maxlength="13"
                  color="purple darken-2"
                  @keyup="getPhoneMask(conditionForm.phone)"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-btn
                  depressed
                  color="primary"
                  width="100%"
                  height="65%"
                  @click="doSearch"
              >
                조회
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <br>
        <v-col col="12">
          <v-data-table :headers="headers" :items="results">
            <template v-slot:top>
              <v-dialog
                v-model="dialog"
                max-width="1000px"
                >
                <v-card>
                  <v-card-title>
                    <span class="text-h5">인증정보수정</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.serial_no"
                              label="시리얼 번호"
                              disabled
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.product_regdate"
                              label="제품등록일자"
                              disabled
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.name"
                              label="고객명"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.phone"
                              label="핸드폰번호"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.addr"
                              label="주소"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.addr_detail"
                              label="주소상세"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.purchase_date"
                              label="구매일자"
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-text-field
                              v-model="editedItem.product_regist_regdate"
                              label="정품등록일자"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="onSaveButtonClick"
                    >
                      저장
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="onCloseButtonClick"
                    >
                      취소
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </template>
            <template v-slot:item="row">
              <tr>
                <td>{{row.item.serial_no}}</td>
                <td>{{row.item.product_regdate}}</td>
                <td>{{row.item.name}}</td>
                <td>{{row.item.phone}}</td>
                <td>{{row.item.addr}}</td>
                <td>{{row.item.addr_detail}}</td>
                <td>{{row.item.purchase_date}}</td>
                <td>{{row.item.product_regist_regdate}}</td>
                <td class="text-center">
                  <v-icon
                      small
                      class="mr-2"
                      @click="onDownloadButtonClick(row.item)"
                  >
                    mdi-folder-arrow-down
                  </v-icon>
                </td>
                <td class="text-center">
                  <v-icon
                      small
                      class="mr-2"
                      @click="onEditButtonClick(row.item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon
                      small
                      @click="onCancelButtonClick(row.item)"
                  >
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <div class="loading" style="display: none;">
      <v-img
          alt="Buddle Logo"
          class="shrink mr-2"
          containn
          src="@/assets/Spin-1s-200px.gif"
          transition="scale-transition"
          width="200"
          @click="goToHome()"
          dark
      />

    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: '시리얼번호', value: 'serial_no', },
      { text: '제품등록일자', value: 'product-regdate' },
      { text: '고객명', value: 'name' },
      { text: '핸드폰번호', value: 'phone' },
      { text: '주소', value: 'addr' },
      { text: '주소상세', value: 'addr_detail' },
      { text: '구매일자', value: 'purchase_date' },
      { text: '정품등록일자', value: 'product_regist_regdate' },
      { text: '다운로드', value: 'product_regist_seq', align:"center" },
      { text: '수정/취소', value: 'cancel_product_auth', align:"center" }
    ],
    dialog:false,
    results: [],
    editedIndex: -1,
    editedItem: {
      product_regdate: "",
      name: "",
      phone: "",
      addr: "",
      addr_detail: "",
      purchase_date:"",
      product_regist_regdate:"",
    },
    defaultItem: {
      product_regdate: "",
      name: "",
      phone: "",
      addr: "",
      addr_detail: "",
      purchase_date:"",
      product_regist_regdate:"",
    },
    conditionForm: {
      name: '',
      phone: '',
      serial_no: '',
      status:{ name: "인증완료", value:2 },
    },
    conditionRules: {
      serial_no: [val => (val || '').length > 0 || '시리얼번호를 입력하세요.'],
      phone_rule: [
        val => !(val && val.length > 11) || '11자리만 입력 가능합니다.',
      ],
    },
    file: '',
    authStatus: [
      { name: "미인증", value:0 },
      { name: "인증취소", value:1 },
      { name: "인증완료", value:2 },
    ],
  }),
  methods: {
    checkNumber(){
      return this.conditionForm.phone = this.conditionForm.phone.replace(/[^0-9]/g, '');
    },
    doSearch() {

      let token = sessionStorage.getItem("access_token");

      if (token == null) {
        alert("로그인을 먼저 해주세요.");
        return;
      }

      const url = "http://15.165.183.94/v1/product/manage";

      const params = new URLSearchParams();

      params.append("name", this.conditionForm.name);
      params.append("phone", this.conditionForm.phone);
      params.append("serial_no", this.conditionForm.serial_no);
      params.append("status", this.conditionForm.status.value);

      this.$axios.get(url,
          {params:params,
            headers: {
              "access-token" : "Bearer "+ token
            }
          }
      )
      .then((res)=> {
        console.log(res.data.data)
        this.results = res.data.data;
      })
    },
    onDownloadButtonClick(seq) {

      if (seq.product_regist_seq === '' || seq.product_regist_seq == null) {
        alert("정품인증 상품이 아닙니다.");
        return;
      }

      let token = sessionStorage.getItem("access_token");
      const url = "http://15.165.183.94/v1/product/receipt?product_regist_seq=" + seq.product_regist_seq + "&access-token="+token;
      const link = document.createElement('a');

      let fileName = seq.filename;
      if (fileName) {
        const [ fileNameMatch ] = fileName.split(';').filter(str => str.includes('filename'));
        if (fileNameMatch)
          [ , fileName ] = fileNameMatch.split('=');
      }
      link.href = url;
      link.setAttribute('download', `${fileName}`);
      link.style.cssText = 'display:none';
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    onCancelButtonClick(seq) {
      if (seq.product_regist_seq == '' || seq.product_regist_seq == null || seq.product_regist_seq == undefined || seq.status != 2) {
        alert("정품인증 상품이 아닙니다.");
        return;
      }

      if (confirm("["+seq.name+"]님의 인증을 취소하시겠습니까?")){
        const url = "http://15.165.183.94/v1/product-regist/"+seq.product_regist_seq+"/cancel";

        const config = {
          method: 'post',
          url: url
        }

        this.$axios.request(config)
            .then(res => {
              if (res.data.success == true) {
                alert("인증취소를 성공하였습니다.");
                this.results.splice(this.results.findIndex(e => e.product_regist_seq == seq.product_regist_seq), 1)
              }
            }).catch(err => {
          console.log(err.response);
        });
      }
    },
    selectFile(file) {
      console.log(file)
      this.file = file;
      console.log(this.file)
    },
    uploadFile() {

      window.$('.loading').show();
      const url = "http://15.165.183.94/v1/product";

      const formData = new FormData();
      formData.append('csv_file', this.file[0]);

      let token = sessionStorage.getItem("access_token");

      const config = {
        method: 'post',
        url: url,
        data: formData,
        headers: {
          "Content-Type": 'multipart/form-data',
          "access-token" : "Bearer "+ token,
        }
      }
      this.$axios.request(config)
          .then(res => {
            console.log(res.data);
            window.$('.loading').hide();
            alert("업로드 성공 : " + res.data.success+"건, " + "업로드 실패 : " + res.data.failure + "건");
          }).catch(err => {
        window.$('.loading').hide();
        console.log(err.response);
      });
    },
    onEditButtonClick(item) {
      this.editedIndex = this.results.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    onCloseButtonClick () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    onSaveButtonClick () {
      if (this.editedIndex < 0 || this.editedItem.serial_no === "" || this.editedItem.serial_no == null || this.editedItem.product_regist_seq === '' || this.editedItem.product_regist_seq == null) {
        alert("정보를 수정 할 수 없습니다.");
        return;
      }

      let token = sessionStorage.getItem("access_token");
      const url = "http://15.165.183.94/v1/product-regist/"+this.editedItem.product_regist_seq;

      const formData = new FormData();
      formData.append("name", this.editedItem.name);
      formData.append('phone', this.editedItem.phone);
      formData.append('addr', this.editedItem.addr);
      formData.append('addr_detail', this.editedItem.addr_detail);
      formData.append('purchase_date', this.editedItem.purchase_date+'T00:00:00Z');
      formData.append('regdate', this.editedItem.product_regist_regdate+'T00:00:00Z');

      const config = {
        method: 'put',
        url: url,
        data: formData,
        headers: {
          "Content-Type": 'application/json',
          "access-token" : "Bearer "+ token,
        }
      }

      this.$axios.request(config)
          .then(res => {
            console.log(res.data);
            alert(res.data.message);
          }).catch(err => {
        console.log(err.response);
      });

      Object.assign(this.results[this.editedIndex], this.editedItem)

      this.onCloseButtonClick()
    },
    getPhoneMask(val) {
      let res = this.getMask(val)
      this.conditionForm.phone = res
      this.model.conditionForm.phone = res
    },
    getMask( phoneNumber ) {
      if (!phoneNumber) return phoneNumber
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

      let res = ''
      if (phoneNumber.length < 3) {
        res = phoneNumber
      } else {
        if (phoneNumber.substr(0, 2) == '02') {

          if (phoneNumber.length <= 5) {//02-123-5678
            res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {//02-123-5678
            res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3) + '-' + phoneNumber.substr(5)
          } else if (phoneNumber.length > 9) {//02-1234-5678
            res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 4) + '-' + phoneNumber.substr(6)
          }

        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
          } else if (phoneNumber.length == 9) {
            res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
          } else if (phoneNumber.length == 10) {
            res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
          } else if (phoneNumber.length > 10) { //010-1234-5678
            res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7)
          }
        }
      }
      return res
    }
  },
}
</script>
<style scoped>
.loading{ /*화면 전체를 어둡게 합니다.*/
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background: white; /*not in ie */
  z-index: 1070;
  opacity: 0.75;
  filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr='#20000000', endColorstr='#20000000');    /* ie */
}
.loading div{ /*로딩 이미지*/
  position: fixed;
  top:45%;
  left:45%;
  right: 30%;
  opacity: 0.75;
}
</style>

