<template>
  <div>
    <v-row>
      <v-col>
        <title-header-profile />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="10" lg="10" xl="10">
          <about-me />
        </v-col>
        <v-col xs="12" sm="12" md="2" lg="2" xl="2">
          <contact />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TitleHeaderProfile from "../components/TitleHeader/TitleHeaderProfile/TitleHeaderProfile.vue";
import AboutMe from "../components/About/AboutMe/AboutMe.vue";
import Contact from "../components/About/Contact/Contact.vue";

export default defineComponent({
  name: "AboutView",

  components: {
    TitleHeaderProfile,
    AboutMe,
    Contact,
  },
});
</script>
