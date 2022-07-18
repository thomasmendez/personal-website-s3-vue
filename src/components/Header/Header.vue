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
    <v-menu>
      <template #activator="{ props }">
        <v-btn class="subHeaderButton" text v-bind="props"> Projects </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in routes"
          :key="index"
          :value="index"
        >
          <v-list-item-title>
            <router-link :to="`${item.to}`">
              {{ item.name }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="subHeaderButton" text>
      <a :href="resume" target="_blank"> Resume </a>
    </v-btn>
    <v-btn class="subHeaderButton" text>
      <v-subheader>Storybook</v-subheader>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Resume from "../../assets/ResumeThomasMendez.pdf";

export default defineComponent({
  name: "Header",
  data() {
    return {
      resume: Resume,
      routes: [
        {
          name: "Software Engineering",
          to: "/softwareEngineering",
        },
        {
          name: "VR / AR",
          to: "/vrar",
        },
      ],
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
.v-toolbar-title {
  color: white;
}
.subHeaderButton {
  color: white;
}
</style>
