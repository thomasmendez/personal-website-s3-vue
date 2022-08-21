<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col>
          <h2>Contact</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ps-0">
          <v-btn
            flat
            icon
            href="https://www.linkedin.com/in/thomas-a-mendez"
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon>
            <span class="iconify" data-icon="mdi:linkedin"></span>
          </v-btn>
          <a href="https://www.linkedin.com/in/thomas-a-mendez" target="_blank"
            ><span>LinkedIn</span></a
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ps-0">
          <v-btn
            flat
            icon
            href="https://github.com/thomasmendez"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
            <span class="iconify" data-icon="mdi:github"></span>
          </v-btn>
          <a href="https://github.com/thomasmendez" target="_blank">
            <span>Github</span>
          </a>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ps-0">
          <v-btn
            flat
            icon
            href="mailto:thomasmendez01@gmail.com"
            target="_blank"
          >
            <v-icon>mdi-email</v-icon>
            <span class="iconify" data-icon="mdi:email"></span>
          </v-btn>
          <a href="mailto:thomasmendez01@gmail.com" target="_blank">
            <span>Email</span>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactInfo",
});
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #800080;
}
</style>
