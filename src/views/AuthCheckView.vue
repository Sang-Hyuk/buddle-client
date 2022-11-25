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
                  v-for="(item,i) in imgs"
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
          <v-row class="md-12">
            <v-col cols="3" style="margin-top: 5px; padding: 0px;">
              <v-card-text style="padding: 0px;">
                <p class="text-center font-weight-black" style="margin-top: 15px;">이름</p>
              </v-card-text>
            </v-col>
            <v-col cols="9" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.name"
                  :rules="conditionRules.name_rule"
                  color="purple darken-2"
                  outlined
                  dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="md-12" style="border-bottom: 1px solid; border-color: darkgray; width: 99.8%; margin-left: 0.2%;">
            <v-col cols="3" style="margin-top: 5px; padding: 0px;">
              <v-card-text style="padding: 0px;">
                <p class="text-center font-weight-black" style="margin-top: 15px;">핸드폰번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="7" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone"
                  :rules="conditionRules.phone_rule"
                  :maxlength="13"
                  color="purple darken-2"
                  @keyup="getPhoneMask(conditionForm.phone)"
                  outlined
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
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">이름</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resName"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">핸드폰번호</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resPhone"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매제품</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resProductType"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매처</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resMarketType"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">구매날짜</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resPurchaseDate"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="md-12">
              <v-col cols="3" style="margin-top: 5px; padding: 0px;">
                <v-card-text style="padding: 0px;">
                  <p class="text-center font-weight-black" style="margin-top: 15px;">시리얼번호</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resSerialNo"
                    :maxlength="13"
                    color="purple darken-2"
                    outlined
                    readonly
                    dense
                ></v-text-field>
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

import mainImg1 from "@/assets/main_metapo01.png";
import mainImg2 from "@/assets/main_metapo02.png";
import mainImg3 from "@/assets/main_metapo03.png";

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
      phone: ''
    },
    resName: '',
    resPhone: '',
    resProductType: '',
    resMarketType:'',
    resPurchaseDate: '',
    resSerialNo: '',
    conditionRules: {
      name_rule: [val => (val || '').length > 0 || '이름을 입력하세요.'],
      phone_rule: [
        val => !(val && val.length > 13) || '13자리만 입력 가능합니다.',
      ],
    },
    file: '',
    imgs: [
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
  }),
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
  },
  methods: {
    doSearch() {

      const url = "http://15.165.183.94/v1/product-regist";

      const params = new URLSearchParams();

      params.append("name", this.conditionForm.name);
      params.append("phone", this.conditionForm.phone);

      this.$axios.get(url,
          {params:params}
      )
      .then((res)=> {
        console.log(res.data)
        console.log(res.data.data)
        /*this.desserts = res.data.data;*/
        if (res.data.success == true) {
          let rows = '';
          rows = res.data.data;
          this.resName = rows.name;
          this.resPhone = rows.phone;
          this.resProductType = rows.product_type;
          this.resMarketType = rows.market_type;
          this.resPurchaseDate = rows.purchase_date;
          this.resSerialNo = rows.serial_no;
        } else {
          alert(res.data.message);
          this.resName = '';
          this.resPhone = '';
          this.resProductType = '';
          this.resMarketType = '';
          this.resPurchaseDate = '';
          this.resSerialNo = '';
        }
      }).catch(err => {
        console.log(err.response);
      });
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

