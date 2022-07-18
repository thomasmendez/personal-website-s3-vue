<template>
  <v-container>
    <v-row v-for="(project, index) in arrayOfObjects" :key="index">
      <v-col>
        <v-row>
          <v-col>
            <p class="title">{{ project.title }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <ProjectSummary
              :description="project.description"
              :my-role="project.myRole"
              :my-tasks="project.myTasks"
              :team-size="project.teamSize"
              :team-roles="project.teamRoles"
              :cloud-services="project.cloudServices"
              :tools="project.tools"
              :project-duration="project.projectDuration"
              :date="project.date"
              :note="project.note"
            ></ProjectSummary>
          </v-col>
          <v-col md="6">
            <ProjectMedia
              :media="project.media"
              :media-alt="project.mediaAlt"
              :media-title="project.mediaTitle"
              :media-description="project.mediaDescription"
              :repository="project.repository"
              :website="project.website"
              :you-tube-link="project.youTubeLink"
              :download-link="project.downloadLink"
            ></ProjectMedia>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Project from "./Project";
import ProjectSummary from "../ProjectSummary/ProjectSummary.vue";
import ProjectMedia from "../ProjectMedia/ProjectMedia.vue";

export default defineComponent({
  name: "Project",
  components: {
    ProjectSummary,
    ProjectMedia,
  },
  props: {
    arrayOfObjects: {
      type: Array as PropType<Project[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.title {
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 1.334;
}
</style>
