<template>
  <div>
    <about-me />
    <contact-info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AboutMe from "../components/About/AboutMe/AboutMe.vue";
import ContactInfo from "../components/About/ContactInfo/ContactInfo.vue";

export default defineComponent({
  name: "AboutView",

  components: {
    AboutMe,
    ContactInfo,
  },
});
</script>
