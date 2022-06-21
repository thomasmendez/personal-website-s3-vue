<template>
  <div>
    <TitleHeader title="Where I Worked" />
    <WorkExperience />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TitleHeader from "../components/TitleHeader/TitleHeader.vue";
import WorkExperience from "../components/WorkExperience/WorkExperience.vue";

export default defineComponent({
  name: "WorkView",

  components: {
    TitleHeader,
    WorkExperience,
  },
});
</script>
