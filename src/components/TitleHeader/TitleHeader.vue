<template>
  <div :style="{ background: this.$vuetify.theme.themes.light.background }">
    <v-container>
      <v-row>
        <v-col>
          <v-row class="justify-center pt-12 pb-12">
            <div class="text-h3">{{ title }}</div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
