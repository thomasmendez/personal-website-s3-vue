<template>
  <v-container class="text-right">
    <b>{{ startDate }} - {{ endDate }}</b>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkDate",
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
});
</script>
