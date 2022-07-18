<template>
  <div v-if="topicName && content">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col>
          <div v-if="!Array.isArray(content)">
            <p>
              <u>{{ topicName }}:</u> {{ content }}
            </p>
          </div>
          <div v-else>
            <p>
              <u>{{ topicName }}:</u>
            </p>
            <ul class="ml-8">
              <li v-for="(value, index) in content" :key="index">
                {{ value }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummarySubject",
  props: {
    topicName: {
      type: String,
      default: "",
      required: false,
    },
    content: {
      type: [String, Number, Array],
      default: "",
      required: false,
    },
  },
});
</script>
