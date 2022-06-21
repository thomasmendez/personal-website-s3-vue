<template>
  <div>
    <b>{{ jobTitle }}</b> at {{ company }}, {{ city }}, {{ state }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkTitle",
  props: {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
});
</script>
