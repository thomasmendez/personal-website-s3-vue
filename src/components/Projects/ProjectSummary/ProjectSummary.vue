<template>
  <div>
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col>
          <SummarySubject
            :topic-name="'Project Description'"
            :content="description"
          />
          <SummarySubject :topic-name="'My Role'" :content="myRole" />
          <SummarySubject :topic-name="'My Tasks'" :content="myTasks" />
          <SummarySubject :topic-name="'Team Size'" :content="teamSize" />
          <SummarySubject :topic-name="'Team Roles'" :content="teamRoles" />
          <SummarySubject
            :topic-name="'Cloud Services'"
            :content="cloudServices"
          />
          <SummarySubject :topic-name="'Tools'" :content="tools" />
          <SummarySubject
            :topic-name="'Project Duration'"
            :content="projectDuration"
          />
          <SummarySubject
            :topic-name="'Project Date'"
            :content="date.startDate + ' - ' + date.endDate"
          />
          <v-row v-if="note">
            <v-col>
              <i>*{{ note }}*</i>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SummarySubject from "../SummarySubject/SummarySubject.vue";

export default defineComponent({
  name: "ProjectSummary",
  components: {
    SummarySubject,
  },
  props: {
    description: {
      type: String,
      required: true,
    },
    myRole: {
      type: String,
      required: true,
    },
    myTasks: {
      type: Array as PropType<string[]>,
      required: true,
    },
    teamSize: {
      type: Number,
      required: true,
    },
    teamRoles: {
      type: Array,
      required: false,
      default: null,
    },
    cloudServices: {
      type: Array,
      required: false,
      default: null,
    },
    tools: {
      type: Array,
      required: true,
    },
    projectDuration: {
      type: String,
      required: true,
    },
    date: {
      type: Object,
      required: true,
    },
    note: {
      type: String,
      required: false,
      default: null,
    },
  },
});
</script>
