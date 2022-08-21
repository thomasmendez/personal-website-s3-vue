<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer,
  },
});
</script>
