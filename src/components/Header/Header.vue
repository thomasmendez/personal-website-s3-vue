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
      <v-subheader>Tools</v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>Skills</v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>Projects</v-subheader>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>Resume</v-subheader>
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
  text-decoration: none i;
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
