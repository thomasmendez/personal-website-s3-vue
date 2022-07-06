<template>
  <div>
    <v-container>
      <Topic :title="'Skills'" />
      <RenderList :array-of-objects="skills" />
      <Topic :title="'Tools'" />
      <RenderList :array-of-objects="tools" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Topic from "./Topic/Topic.vue";
import RenderList from "./RenderList/RenderList.vue";

export default defineComponent({
  name: "SkillsTools",
  components: {
    Topic,
    RenderList,
  },
  data() {
    return {
      skills: [
        { Trillingual: ["English", "Spanish", "Portuguese"] },
        {
          "Software Methodologies and Practices": [
            "Agile",
            "Scrum",
            "Rapid Prototyping",
          ],
        },
        { "Design Thinking": ["IBM Enterprise Design Thinking"] },
      ],
      tools: [
        { "Game Engines": ["Unity"] },
        {
          "Programming Languages": [
            "Python",
            "JavaScript",
            "Java",
            "Swift",
            "C#",
          ],
        },
        {
          "Front-End": [
            "HTML",
            "CSS",
            "ES6",
            "React",
            "Angular",
            "Bootstrap",
            "Material-UI",
            "Webpack",
            "GraphQL",
            "ESLint",
          ],
        },
        { "Back-End": ["Node.js", "PHP", "Flask", "SQLAlchemy"] },
        { Databases: ["MySQL", "MongoDB"] },
        { "Mobile Development": ["iOS (XCode)", "Android (Android Studio)"] },
        {
          "Unit Testing": [
            "Jest",
            "Mocha",
            "Jasmine",
            "Chai",
            "Enzyme",
            "Junit",
            "XCTest",
          ],
        },
        { "CI/CD Tools": ["Gitlab CI", "Jenkins", "Github Actions"] },
        {
          "Data Mining": [
            "Classification",
            "Clustering",
            "Association Analysis",
            "Dimensionality Reduction",
          ],
        },
      ],
    };
  },
});
</script>
