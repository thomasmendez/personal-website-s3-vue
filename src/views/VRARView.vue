<template>
  <div>
    <TitleHeader
      title="Virtual Reality (VR) / Augmented Reality (AR) Projects"
    />
    <Project :array-of-objects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TitleHeader from "../components/TitleHeader/TitleHeader.vue";
import Project from "../components/Projects/Project/Project.vue";
import Ankhor from "../assets/ankhor.mp4";
import MarkAR from "../assets/markar.mp4";
import Cuffleboard from "../assets/curffleboard.mp4";
import ToughCrowd from "../assets/toughcrowd.mp4";

export default defineComponent({
  name: "VRARView",

  components: {
    TitleHeader,
    Project,
  },

  data() {
    return {
      projects: [
        {
          title: "Ankhor (Room Scale VR Game)",
          description:
            "A room scale mystery / horror game where you are a doctor trapped in a hospital with strange robed beings. You are able to interact with your surroundings in VR, pick up mysterious objects to aid you in your escape, and you must stealthily avoid getting captured.",
          myRole: "C# Unity Developer",
          myTasks: ["Develop VR Game Mechanics and Interactions"],
          teamSize: 6,
          teamRoles: [
            "3 C# Unity Developers",
            "2 3D Modelers",
            "1 Game Designer",
            "1 Music Producer",
          ],
          tools: ["Unity", "Steam VR Plugin", "HTC Vive"],
          platform: "HTC Vive",
          projectDuration: "15 Weeks",
          date: {
            startDate: "1/28/2019",
            endDate: "5/14/2019",
          },
          media: Ankhor,
          mediaAlt: "Ankhor VR Game Video",
          mediaTitle: "Ankhor VR Game Features",
          mediaDescription:
            "HTC Vive Room Scale VR Game. Mystery / Horror VR Environment. Player can interact with elements in their environment. Player can obtain special items to clear different parts of the level",
          youTubeLink:
            "https://www.youtube.com/watch?v=DBAIfIF99wQ&ab_channel=HaoyangLi",
        },
        {
          title: "MarkAR (AR Prototype)",
          description:
            "An augmented reality application intended to show the user where they place down a certain 3D object (marker) in the real world. They can then find it later and be directed to where they placed it.",
          myRole: "C# Unity Developer",
          myTasks: ["Develop AR App Functionality"],
          teamSize: 3,
          teamRoles: ["C# Unity Developer", "2D Artist", "3D Modeler"],
          tools: ["Unity"],
          platform: "Android (Google Pixle)",
          projectDuration: "15 Weeks",
          date: {
            startDate: "9/03/2018",
            endDate: "12/18/2018",
          },
          media: MarkAR,
          mediaAlt: "MarkAR Video",
          mediaTitle: "MarkAR App Features",
          mediaDescription:
            "User can select a 3D Object to place in their AR Environment. User can scale, move, rotate, and delete placed objects. User can search for a placed object and will be shown the direction it was placed at. User can place a custom sign with text or image from phone.",
          website: "https://socialar.weebly.com/",
        },
        {
          title: "Curffleboard (AR Game)",
          description:
            "An augmented reality game that allows users to play a game of curling using augmented reality technology. The game can be shared between two players with one phone.",
          myRole: "C# Unity Developer",
          myTasks: [
            "Create Win / Lose Conditions",
            "Develop 2 Player Functionality",
          ],
          teamSize: 3,
          teamRoles: ["C# Unity Developer", "2D Artist", "3D Modeler"],
          tools: ["Unity"],
          platform: "Android (Google Pixle)",
          projectDuration: "6 Weeks",
          date: {
            startDate: "3/19/2018",
            endDate: "5/01/2018",
          },
          media: Cuffleboard,
          mediaAlt: "Curffleboard (AR Game) Video",
          mediaTitle: "Curffleboard Features",
          mediaDescription:
            "User can play a AR game similar to curling. 2 Players take turns sharing the device to aim at the target in the board.",
          downloadLink: "https://utexas.app.box.com/v/CurffleboardApk",
        },
        {
          title: "Tough Crowd (Room Scale VR Game)",
          description:
            "You are a bad comedian on stage and you are trying to avoid objects that the audience throws at you. You have to hold off the crowd until your crew closes the curtains for the stage.",
          myRole: "C# Unity Developer",
          myTasks: [
            "Develop VR Game Mechanics and Interactions",
            "Created, Rigged, and Animated Enemies",
          ],
          teamSize: 3,
          teamRoles: ["2 C# Unity Developers", "3D Artist"],
          tools: ["Unity", "Steam VR Plugin", "HTC Vive"],
          platform: "HTC Vive",
          projectDuration: "5 Weeks",
          date: {
            startDate: "2/13/2018",
            endDate: "3/19/2018",
          },
          media: ToughCrowd,
          mediaAlt: "Tough Crowd (Room Scale VR Game) Video",
          mediaTitle: "Tough Crowd Features",
          mediaDescription:
            "User can grab objects that are on the ground and throw them at the audience. User can move around the 3D space and dodge incoming objects that are being thrown at.",
          downloadLink:
            "https://utexas.app.box.com/s/d4zsulbdt0sxgd4jv8h7civgbcqvtsz5",
        },
      ],
    };
  },
});
</script>
