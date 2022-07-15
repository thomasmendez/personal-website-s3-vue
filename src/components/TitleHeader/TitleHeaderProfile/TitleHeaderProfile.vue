<template>
  <div :style="{ background: this.$vuetify.theme.themes.light.background }">
    <v-container class="grey lighten-5">
      <v-row class="pb-5 pt-5">
        <v-col>
          <v-row class="justify-center pb-10">
            <v-card max-width="344" id="rounded-card">
              <v-row>
                <v-col>
                  <v-img
                    height="200"
                    width="200"
                    id="rounded-card"
                    :src="profilePic"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
          <v-row class="justify-center pb-3">
            <div class="text-h4">Thomas A Mendez</div>
          </v-row>
          <v-row class="justify-center">
            <div class="text-h5 text-center" id="sub-header">
              Software Engineer <br />
              and Game Developer
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import profilePic from "../../../assets/pic.jpeg";

export default defineComponent({
  name: "TitleHeaderProfile",
  data() {
    return {
      profilePic: profilePic,
    };
  },
});
</script>

<style scoped>
#rounded-card {
  border-radius: 50%;
}
#sub-header {
  color: #aaa;
}
</style>
