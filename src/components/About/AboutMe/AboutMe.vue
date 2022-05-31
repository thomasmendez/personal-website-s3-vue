<template>
  <v-container class="grey lighten-5">
    <v-row class="pb-5">
      <v-col>
        <v-row>
          <v-col class="pt-0 pl-0 pr-0 pb-5">
            <h2>About Me</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 pa-0">
            <p>
              I am a passionate software engineer who loves to solve real world
              problems using new unexplored technologies. I enjoy developing
              good user experiences, wether it be for desktop, mobile, or video
              games. Always looking forward to working on the next big project.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col class="pt-0 pl-0 pr-0 pb-5">
            <h2>Education</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 pa-0" xs="8" sm="8" md="8">
            <p>
              Bachelor of Science in Arts and Entertainment Technologies, at The
              University of Texas at Austin
            </p>
          </v-col>
          <v-col class="d-flex justify-end" xs="2" sm="4" md="4">
            <b>August 2016 - May 2019</b>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul>
          <li>Elements of Computing Certificate</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",

  data() {
    return {
      whatsNext: [
        {
          text: "Explore components",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Roadmap",
          href: "https://vuetifyjs.com/en/introduction/roadmap/",
        },
        {
          text: "Frequently Asked Questions",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    };
  },
});
</script>
