<template>
  <v-container fluid>
    <v-card outlined>
      <v-row>
        <v-col>
          <v-card>
            <v-carousel
                cycle
                hide-delimiters
                height="750"
            >
              <v-carousel-item
                  v-for="(item,i) in items"
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
    <v-card class="mt-4" outlined>
      <v-row justify="space-around">
        <v-col>
          <v-card outlined>그림1</v-card>
        </v-col>
        <v-col>
          <v-card outlined>그림2</v-card>
        </v-col>
        <v-col>
          <v-card outlined>그림3</v-card>
        </v-col>
        <v-col>
          <v-card outlined>그림4</v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-4" outlined>
      <v-row>
        <v-col>
          <v-card outlined>그림5</v-card>
        </v-col>
      </v-row>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
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
  }
}
</script>
