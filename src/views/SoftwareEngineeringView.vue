<template>
  <div>
    <TitleHeader title="Software Engineering" />
    <Project :array-of-objects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TitleHeader from "../components/TitleHeader/TitleHeader.vue";
import Project from "../components/Projects/Project/Project.vue";
import OpenLMSBlendedVideo from "../assets/open-lms-blended-sample.mp4";
import NoblePrizesImg from "../assets/laureates.png";
import CustomClothingBrandWebsite from "../assets/lcm.png";

export default defineComponent({
  name: "ProjectView",

  components: {
    TitleHeader,
    Project,
  },

  data() {
    return {
      projects: [
        {
          title: "Open-LMS-Blended",
          description:
            "An open source learning management system intended for K-12 educational institutions.",
          myRole: "Software Engineer",
          myTasks: [
            "Developed an open source LMS intended for K-12 educational institutions using the MERN stack",
            "Experienced the entire development lifecycle, deployed, and documented the entire application for both Digital Ocean and AWS",
          ],
          teamSize: 1,
          cloudServices: ["AWS", "Digital Ocean"],
          tools: ["MongoDB", "Express", "React", "Node.js"],
          projectDuration: "3 Months",
          date: {
            startDate: "March 2020",
            endDate: "May 2020",
          },
          note: "This site is no longer avaliable as of May 2021. The site was only intended to be avaliable for a year for demo purposes.",
          media: OpenLMSBlendedVideo,
          mediaAlt: "Open-LMS-Blended Video",
          mediaTitle: "Open-LMS-Blended Features",
          mediaDescription:
            "A user is able to create an account, create a course, and upload/manage their syllabus, assignments, class schedule, and lectures. They can also manage their account such as their email, semester, password, or delete their account. Any viewer can view any created courses along with uploaded files.",
          repository: "https://github.com/thomasmendez/open-lms-blended",
        },
        {
          title: "Noble Prizes Website",
          description:
            "Dynamic website that shows information about different laureates, countries that they are from, and different noble prize categories they won.",
          myRole: "Software Engineer",
          myTasks: [
            "Create a dynamic website showcasing all the laureates, their awards, and their country of origin with a team of 5",
            "Worked with SQLAlchemy and the Google Cloud Platform to make sure webpages were deployed properly",
            "Developed static pages using HTML and CSS",
          ],
          teamSize: 5,
          teamRoles: [
            "Front-End Developer",
            "Back-End Developer",
            "Unit Testing and Continuous Integration",
            "GCP Deployment",
          ],
          cloudServices: ["Google Cloud Platform"],
          tools: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "Flask",
            "SQL Alchemy",
            "Postgres",
          ],
          projectDuration: "7 Weeks",
          date: {
            startDate: "10/14/2018",
            endDate: "12/02/2018",
          },
          note: "Website currently not running because of the expensive cost of App Engine",
          media: NoblePrizesImg,
          mediaAlt: "Noble Prizes Img",
          mediaTitle: "Noble Prizes Features",
          mediaDescription:
            "Visitors can view the different laureates, countries that they are from, and different noble prize categories they won. Users can also search for a particular set of data they wish to see in the page.",
          repository: "https://gitlab.com/thomasmendez/cs329e-idb",
        },
        {
          title: "Custom Clothing Brand Website",
          description:
            "Dynamic clothing brand website that allows users to browse the brand's selection of products.",
          myRole: "Full-Stack Developer",
          myTasks: [
            "Worked with another full-stack developer to create a potential website for a future clothing brand",
            "Used the LAMP (Linux-Apache-MySQL-PHP) stack to develop the application",
          ],
          teamSize: 2,
          teamRoles: ["Full-Stack Developer"],
          tools: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "Linux",
            "Apache",
            "MySQL",
            "PHP",
          ],
          projectDuration: "8 Weeks",
          date: {
            startDate: "10/24/2018",
            endDate: "12/12/2018",
          },
          note: "Website no longer avaliable since July 2020",
          media: CustomClothingBrandWebsite,
          mediaAlt: "Clothing Brand Website",
          mediaTitle: "Clothing Brand Features",
          mediaDescription:
            "Users can interact with the website to place orders, contact the brand, add products to their cart, and see all products available through a database.Dynamic clothing brand website that allows users to browse the brand's selection of products. Users can interact with the website to place orders, contact the brand, add products to their cart, and see all products available from the database.",
        },
      ],
    };
  },
});
</script>
