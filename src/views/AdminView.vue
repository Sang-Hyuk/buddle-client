<template>
  <v-container fluid style="min-width: 100%;">
    <!--  관리화면  -->
    <v-container class="mt-4" style="min-width: 90%;">

      <v-row class="mb-12" style="margin-bottom: 0px !important;">
        <v-row class="md-12">
          <v-col cols="2">
            <v-card-text>
              <p class="text-right font-weight-bold" style="color:red">파일업로드</p>
            </v-card-text>
          </v-col>
          <v-col cols="4">
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
          <v-row class="md-12" style="height: 50px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-right font-weight-black">시리얼번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.serial_no"
                  :rules="conditionRules.serial_no"
                  color="purple darken-2"
                  outlined
                  dense
                  required
              ></v-text-field>
            </v-col>
            <v-col cols="2">
              <v-card-text>
                <p class="text-right font-weight-black">핸드폰번호</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone1"
                  :rules="conditionRules.phone1_rule"
                  color="purple darken-2"
                  label=""
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone2"
                  :rules="conditionRules.phone2_rule"
                  color="purple darken-2"
                  label=""
                  outlined
                  dense
              ></v-text-field>
            </v-col>
            <v-col cols="2" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.phone3"
                  :rules="conditionRules.phone3_rule"
                  color="purple darken-2"
                  label=""
                  outlined
                  dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="md-12" style="height: 50px;">
            <v-col cols="2">
              <v-card-text>
                <p class="text-right font-weight-black">정품인증</p>
              </v-card-text>
            </v-col>
            <v-col cols="2" style="margin-top: -8px;">
              <v-checkbox
                  v-model="conditionForm.only_auth_product"
                  label="정품인증"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-card-text>
                <p class="text-right font-weight-black">이름</p>
              </v-card-text>
            </v-col>
            <v-col cols="4" style="margin-top: 5px;">
              <v-text-field
                  v-model="conditionForm.name"
                  :rules="conditionRules.name_rule"
                  color="purple darken-2"
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
        <v-col col="12">
          <v-data-table :headers="headers" :items="desserts">
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
          </v-data-table>
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
      phone1: '',
      phone2: '',
      phone3: '',
      serial_no: '',
      only_auth_product: false,
    },
    conditionRules: {
      serial_no: [val => (val || '').length > 0 || '시리얼번호를 입력하세요.'],
      phone1_rule: [
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 3) || '3자리만 입력 가능합니다.',
      ],
      phone2_rule: [
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 4) || '4자리만 입력 가능합니다.',
      ],
      phone3_rule: [
        val => !/[^0-9]/.test(val) || '숫자만 입력 가능합니다.',
        val => !(val && val.length > 4) || '4자리만 입력 가능합니다.',
      ],
    },
    file: '',
  }),
  methods: {
    doSearch() {

      const url = "http://3.38.101.67/v1/product/manage";

      let phone = '';

      if (this.conditionForm.phone1 == '' || this.conditionForm.phone2 == '' || this.conditionForm.phone3 == '') {
        phone = '';
      } else {
        phone = this.conditionForm.phone1 + '-' + this.conditionForm.phone2 + '-' + this.conditionForm.phone3;
      }

      const params = new URLSearchParams();

      params.append("name", this.conditionForm.name);
      params.append("phone", phone);
      params.append("serial_no", this.conditionForm.serial_no);
      params.append("only_auth_product", this.conditionForm.only_auth_product);

      let token = sessionStorage.getItem("access_token");

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
      console.log(seq)
      if (seq.product_regist_seq == '' || seq.product_regist_seq == null || seq.product_regist_seq == undefined) {
        alert("정품인증 상품이 아닙니다.");
        return;
      }

      let token = sessionStorage.getItem("access_token");
      const url = "http://3.38.101.67/v1/product/receipt?product_regist_seq=" + seq.product_regist_seq + "&access-token="+token;
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

      const url = "http://3.38.101.67/v1/product";

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
            alert("업로드 성공 : " + res.data.success+"건, " + "업로드 실패 : " + res.data.failure + "건");
          }).catch(err => {
        console.log(err.response);
      });
    }
  },
}
</script>