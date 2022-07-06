<template>
  <v-container>
    <ul v-for="(item, index) in arrayOfObjects" :key="index">
      <li v-for="(value, name) in item" :key="name">
        {{ name }}: {{ value.join(", ") }}
      </li>
    </ul>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RenderList",
  props: {
    arrayOfObjects: {
      type: Array,
      required: true,
    },
  },
});
</script>
