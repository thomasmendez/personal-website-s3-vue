<template>
  <h2>{{ title }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Topic",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
h2 {
  text-decoration: underline;
}
</style>
