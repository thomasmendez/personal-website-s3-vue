<template>
  <v-container class="grey lighten-5">
    <v-row class="pb-5">
      <v-col>
        <v-row class="justify-center pb-5">
          <v-card max-width="344" id="rounded-card">
            <v-row>
              <v-col>
                <v-img
                  height="200"
                  width="200"
                  id="rounded-card"
                  src="../../../assets/pic.jpeg"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-row class="justify-center pb-5">
          <div class="text-h4">Thomas A Mendez</div>
        </v-row>
        <v-row class="justify-center">
          <div class="text-h5 text-center">
            Software Engineer <br />
            and Game Developer
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleHeaderProfile",
});
</script>

<style scoped>
#rounded-card {
  border-radius: 50%;
}
</style>
