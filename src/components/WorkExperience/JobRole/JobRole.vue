<template>
  <i>{{ jobRole }}</i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JobRole",
  props: {
    jobRole: {
      type: String,
      required: true,
    },
  },
});
</script>
