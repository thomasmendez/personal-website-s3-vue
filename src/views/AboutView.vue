<template>
  <div>
    <about-me />
    <contact />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AboutMe from "../components/About/AboutMe/AboutMe.vue";
import Contact from "../components/About/Contact/Contact.vue";

export default defineComponent({
  name: "AboutView",

  components: {
    AboutMe,
    Contact,
  },
});
</script>
