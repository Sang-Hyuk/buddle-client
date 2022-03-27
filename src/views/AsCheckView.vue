<template>
  <v-container fluid style="min-width: 100%;">
    <!--  관리화면  -->
    <v-container class="mt-4" style="min-width: 90%;">

      <v-row class="mb-12" justify="left">
        <v-col lg="12">
          <p class="text-left" style="font-size: 32px; font-weight: bold; border-bottom: 1px solid; border-color: darkgray; margin-bottom: 0px;">A/S 신청 확인
            <span style="font-size: 18px;">A/S신청 내역을 확인하세요.</span>
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
                <p class="text-right font-weight-black">이름</p>
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
                <p class="text-right font-weight-black">핸드폰번호</p>
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
                    v-model="this.resName"
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
                    v-model="this.resPhone"
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
                  <p class="text-center font-weight-black" style="margin-top: 15px;">이메일</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-text-field
                    v-model="this.resEmail"
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
                    v-model="this.resProductType"
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
                    v-model="this.resMarketType"
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
                    v-model="this.resPurchaseDate"
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
                  <p class="text-center font-weight-black" style="margin-top: 15px;">문의사항</p>
                </v-card-text>
              </v-col>
              <v-col cols="9" style="margin-top: 10px; padding: 0px;">
                <v-textarea
                    v-model="this.resContents"
                    solo
                    outlined
                    readonly
                    dense
                ></v-textarea>
              </v-col>
              <v-col cols="1">
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    conditionForm: {
      name: '',
      phone: ''
    },
    resName: '',
    resPhone: '',
    resEmail: '',
    resProductType: '',
    resMarketType:'',
    resPurchaseDate: '',
    resContents: '',
    conditionRules: {
      name_rule: [val => (val || '').length > 0 || '이름을 입력하세요.'],
      phone_rule: [
        val => !(val && val.length > 13) || '13자리만 입력 가능합니다.',
      ],
    },
    file: '',
  }),
  methods: {
    doSearch() {

      const url = "http://15.165.183.94/v1/as";

      const params = new URLSearchParams();

      params.append("name", this.conditionForm.name);
      params.append("phone", this.conditionForm.phone);

      this.$axios.get(url,
          {params:params}
      )
          .then((res)=> {
            if (res.data.success == true) {
              let rows = '';
              rows = res.data.data;
              this.resName = rows.name;
              this.resPhone = rows.phone;
              this.resEmail = rows.email;
              this.resProductType = rows.product_type;
              this.resMarketType = rows.market_type;
              this.resPurchaseDate = rows.purchase_date;
              this.resContents = rows.contents;
            } else {
              alert(res.data.message);
              this.resName = '';
              this.resPhone = '';
              this.resEmail = '';
              this.resProductType = '';
              this.resMarketType = '';
              this.resPurchaseDate = '';
              this.resContents = '';
            }
          }).catch(err => {
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

