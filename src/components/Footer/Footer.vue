<template>
  <v-container>
    <v-col class="d-flex flex-row justify-space-between">
      <v-row>
        <v-col xs="12" sm="3" md="3">
          <div>© {{ currentYear }} Copyright</div>
        </v-col>
        <v-col class="d-flex justify-center" xs="12" sm="6" md="6">
          <v-row>
            <v-col>
              <v-row class="d-flex justify-center">
                <a
                  href="https://github.com/thomasmendez/personal-website-s3-vue"
                  target="_blank"
                >
                  <div class="pr-2">Created with Vue!</div>
                </a>
                <v-img
                  :src="vueIcon"
                  contain
                  aspect-ratio="1"
                  max-height="25px"
                  max-width="25px"
                />
              </v-row>
              <v-row class="pt-5 d-flex justify-center">
                <a href="http://thomasamendez.com" target="_blank">
                  <div class="pr-2">Check out the React version!</div>
                </a>
                <v-img
                  :src="reactIcon"
                  contain
                  aspect-ratio="1"
                  max-height="25px"
                  max-width="25px"
                />
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="flex-row-reverse" xs="12" sm="3" md="3">
          <v-btn
            flat
            icon
            href="https://www.linkedin.com/in/thomas-a-mendez"
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon>
            <span class="iconify" data-icon="mdi:linkedin"></span>
          </v-btn>
          <v-btn
            flat
            icon
            href="https://github.com/thomasmendez"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
            <span class="iconify" data-icon="mdi:github"></span>
          </v-btn>
          <v-btn
            flat
            icon
            href="mailto:thomasmendez01@gmail.com"
            target="_blank"
          >
            <v-icon>mdi-email</v-icon>
            <span class="iconify" data-icon="mdi:email"></span>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vueIcon from "../../assets/vue.jpg";
import reactIcon from "../../assets/react.png";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      vueIcon,
      reactIcon,
    };
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #800080;
}
.v-container {
  border-top: solid 1px gray;
}
</style>
