<template>
  <v-container fluid style="min-width: 100%;">
    <!--  관리화면  -->
    <v-container class="mt-4" style="min-width: 90%;">

      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray; margin-bottom: 0px;">정품등록확인
            <span style="font-size: 18px;">정품등록을 확인하세요.</span>
          </p>
        </v-col>
      </v-row>

      <v-row class="mb-12" justify="left">
        <v-container fluid>
          <v-row class="md-12" style="border-bottom: 1px solid; border-color: darkgray; width: 99.8%; margin-left: 0.2%;">
            <v-col cols="1" >
            </v-col>
            <v-col cols="1">
            </v-col>
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black" style="margin-top: 15px;">이름</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.name"
                  :rules="conditionRules.name_rule"
                  color="purple darken-2"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-card-text>
                <p class="text-right font-weight-black" style="margin-top: 15px;">핸드폰번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone"
                  :rules="conditionRules.phone_rule"
                  :maxlength="13"
                  color="purple darken-2"
                  label="-포함 입력하세요."
                  outlined
                  readonly
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="2">
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
          <v-container fluid>
            <v-row class="md-12" style="border-bottom: 1px solid; border-color: darkgray;">
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">이름</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.name"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">핸드폰번호</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.phone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매제품</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.phone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매처</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.phone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매날짜</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.phone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="padding: 0px;">
              </v-col>
              <v-col cols="1" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">시리얼번호</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="conditionForm.phone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
              <v-col cols="1">
              </v-col>
            </v-row>
          </v-container>
<!--          <v-data-table :headers="headers" :items="desserts">
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
                <td>
                  <v-btn class="primary"  @click="onButtonClick(row.item)">
                    다운로드
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>-->
        </v-col>
      </v-row>
    </v-container>
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
      { text: '다운로드', value: 'product_regist_seq' }
    ],
    desserts: [],
    conditionForm: {
      name: '',
      phone: '',
      serial_no: '',
      only_auth_product: false,
    },
    conditionRules: {
      name_rule: [val => (val || '').length > 0 || '이름을 입력하세요.'],
      phone_rule: [
        val => !(val && val.length > 13) || '13자리만 입력 가능합니다.',
      ],
    },
    file: '',
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
      params.append("only_auth_product", this.conditionForm.only_auth_product);

      this.$axios.get(url,
          {params:params,
            headers: {
              "access-token" : "Bearer "+ token
            }
          }
      )
      .then((res)=> {
        console.log(res.data.data)
        this.desserts = res.data.data;
      })
    },
    onButtonClick(seq) {

      if (seq.product_regist_seq == '' || seq.product_regist_seq == null || seq.product_regist_seq == undefined) {
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

