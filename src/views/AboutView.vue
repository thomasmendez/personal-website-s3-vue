<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col class="mb-5" cols="12">
        <h1>About Me</h1>

        <p class="subheading">
          I am a passionate software engineer who loves to solve real world
          problems using new unexplored technologies. I enjoy developing good
          user experiences, wether it be for desktop, mobile, or video games.
          Always looking forward to working on the next big project.
        </p>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col xs="8" sm="8" md="8" lg="10">
        <v-row>
          <h2>Education</h2>
        </v-row>
        <v-row>
          <v-col xs="8" sm="8" md="8">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title
                  >Bachelor of Science in Arts and Entertainment Technologies,
                  at The University of Texas at Austin</v-list-item-title
                >
                <v-list-item-subtitle
                  >Elements of Computing Certificate</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col class="d-flex justify-end" xs="2" sm="4" md="4">
            <p>August 2016 - May 2019</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-for="n in 2" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
      <v-col v-for="k in n + 1" :key="k">
        <v-card class="pa-2" outlined tile> {{ k }} of {{ n + 1 }} </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",

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
