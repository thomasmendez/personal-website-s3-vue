<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col class="pt-0 pl-0 pr-0 pb-5">
        <h2>Contact</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="ma-2" text flat icon>
          <v-icon>mdi-linkedin</v-icon>
          <span class="iconify" data-icon="mdi:linkedin"></span>
        </v-btn>
        <a href="https://www.linkedin.com/in/thomas-a-mendez" target="_blank"
          ><span>LinkedIn</span></a
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="ma-2" text flat icon>
          <v-icon>mdi-github</v-icon>
          <span class="iconify" data-icon="mdi:github"></span>
        </v-btn>
        <a href="https://github.com/thomasmendez" target="_blank">
          <span>Github</span>
        </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn class="ma-2" text flat icon>
          <v-icon>mdi-email</v-icon>
          <span class="iconify" data-icon="mdi:email"></span>
        </v-btn>
        <a href="mailto:thomasmendez01@gmail.com" target="_blank">
          <span>Email</span>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactInfo",
});
</script>

<style>
a {
  text-decoration: none !important;
}

a:hover {
  color: #800080;
}
</style>
