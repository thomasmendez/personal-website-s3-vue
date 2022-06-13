<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/Header.vue";

export default defineComponent({
  name: "AboutView",

  components: {
    Header,
  },
});
</script>
