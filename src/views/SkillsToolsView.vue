<template>
  <div>
    <TitleHeader title="Skills & Tools" />
    <SkillsTools />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TitleHeader from "../components/TitleHeader/TitleHeader.vue";
import SkillsTools from "../components/SkillsTools/SkillsTools.vue";

export default defineComponent({
  name: "SkillsToolsView",

  components: {
    TitleHeader,
    SkillsTools,
  },
});
</script>
