<template>
  <v-container>
    <v-col>
      <v-row> © {{ currentYear }} Copyright </v-row>
    </v-col>
    <v-col>
      <v-row> Contact Methods </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});
</script>

<style scoped></style>
