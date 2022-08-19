<template>
  <v-container>
    <v-col class="d-flex flex-row">
      <v-row>
        <v-col xs="12" sm="9" md="9" lg="10" xl="10">
          <div>© {{ currentYear }} Copyright</div>
        </v-col>
        <v-col class="flex-row-reverse" xs="12" sm="3" md="3" lg="2" xl="2">
          <v-btn flat icon>
            <v-icon>mdi-linkedin</v-icon>
            <span class="iconify" data-icon="mdi:linkedin"></span>
          </v-btn>
          <a href="https://www.linkedin.com/in/thomas-a-mendez" target="_blank">
          </a>
          <v-btn flat icon>
            <v-icon>mdi-github</v-icon>
            <span class="iconify" data-icon="mdi:github"></span>
          </v-btn>
          <a href="https://github.com/thomasmendez" target="_blank"></a>
          <v-btn flat icon>
            <v-icon>mdi-email</v-icon>
            <span class="iconify" data-icon="mdi:email"></span>
          </v-btn>
          <a href="mailto:thomasmendez01@gmail.com" target="_blank"></a>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
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
  color: inherit;
}
.v-container {
  border-top: solid 1px gray;
}
</style>
