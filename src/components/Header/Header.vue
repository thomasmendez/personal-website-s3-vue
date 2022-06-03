<template>
  <v-toolbar color="cyan" dark>
    <v-toolbar-title>Thomas A. Mendez</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <v-subheader>About</v-subheader>
    </v-btn>
    <v-btn text>
      <v-subheader>Tools</v-subheader>
    </v-btn>
    <v-btn text>
      <v-subheader>Skills</v-subheader>
    </v-btn>
    <v-btn text>
      <v-subheader>Projects</v-subheader>
    </v-btn>
    <v-btn text>
      <v-subheader>Resume</v-subheader>
    </v-btn>
    <v-btn text>
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

<style>
a {
  text-decoration: none !important;
}

a:hover {
  color: #800080;
}
</style>
