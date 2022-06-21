<template>
  <v-container>
    <ul>
      <li v-for="jobDescription in jobDescriptions" :key="jobDescription">
        {{ jobDescription }}
      </li>
    </ul>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JobDescription",
  props: {
    jobDescriptions: {
      type: Array,
      required: true,
    },
  },
});
</script>
