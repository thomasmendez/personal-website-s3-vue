<template>
  <about-me />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AboutMe from "../components/About/AboutMe/AboutMe.vue";

export default defineComponent({
  name: "AboutView",

  components: {
    AboutMe,
  },
});
</script>
