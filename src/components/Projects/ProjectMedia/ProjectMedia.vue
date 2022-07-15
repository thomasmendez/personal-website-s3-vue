<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="flexcard">
          <video
            v-if="media.endsWith('.mp4')"
            controls
            :src="media"
            :alt="mediaAlt"
          ></video>

          <v-img v-else :src="media" :alt="mediaAlt"></v-img>

          <v-card-title> {{ mediaTitle }} </v-card-title>

          <v-card-subtitle> {{ mediaDescription }} </v-card-subtitle>

          <v-card-actions>
            <v-btn v-if="website" color="blue lighten-2" text>
              <a :href="website" target="_blank">Website</a>
            </v-btn>

            <v-btn v-if="repository" color="blue lighten-2" text>
              <a :href="repository" target="_blank">Repository</a>
            </v-btn>

            <v-btn v-if="youTubeLink" color="blue lighten-2" text>
              <a :href="youTubeLink" target="_blank">YouTube</a>
            </v-btn>

            <v-btn v-if="downloadLink" color="blue lighten-2" text>
              <a :href="downloadLink" target="_blank">DownloadLink</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectMedia",
  data: () => ({
    show: false,
  }),
  props: {
    media: {
      type: String,
      required: true,
    },
    mediaAlt: {
      type: String,
      required: true,
    },
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaDescription: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      default: "",
      required: false,
    },
    repository: {
      type: String,
      default: "",
      required: false,
    },
    youTubeLink: {
      type: String,
      default: "",
      required: false,
    },
    downloadLink: {
      type: String,
      default: "",
      required: false,
    },
  },
});
</script>

<style scoped>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
