<template>
  <v-toolbar color="grey">
    <v-toolbar-title>Thomas A. Mendez</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="subHeaderButton" text>
      <v-subheader>
        <router-link to="/about">About</router-link>
      </v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>
        <router-link to="/work">Work</router-link>
      </v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>
        <router-link to="/skillsTools">Skills &amp; Tools</router-link>
      </v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <router-link to="/projects">Projects</router-link>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <router-link to="/resume">Resume</router-link>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>Storybook</v-subheader>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
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
.v-toolbar-title {
  color: white;
}
.subHeaderButton {
  color: white;
}
</style>
