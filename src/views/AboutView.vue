<template>
  <div>
    <v-row>
      <v-col>
        <title-header-profile />
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col xs="12" sm="12" md="9" lg="9" xl="9">
          <about-me />
        </v-col>
        <v-col xs="12" sm="12" md="3" lg="3" xl="3">
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
