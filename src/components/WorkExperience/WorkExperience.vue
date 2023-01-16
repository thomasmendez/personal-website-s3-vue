<template>
  <div>
    <v-container>
      <v-row v-for="experience in experiences" :key="experience.company">
        <v-col>
          <v-row>
            <v-col xs="10">
              <WorkTitle
                :job-title="experience.jobTitle"
                :company="experience.company"
                :city="experience.city"
                :state="experience.state"
              />
              <JobRole :job-role="experience.jobRole" />
            </v-col>
            <v-col xs="2">
              <WorkDate
                :start-date="experience.startDate"
                :end-date="experience.endDate"
              />
            </v-col>
          </v-row>
          <JobDescription :job-descriptions="experience.jobDescription" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkTitle from "./WorkTitle/WorkTitle.vue";
import JobRole from "./JobRole/JobRole.vue";
import WorkDate from "./WorkDate/WorkDate.vue";
import JobDescription from "./JobDescription/JobDescription.vue";

export default defineComponent({
  name: "WorkExperience",
  components: {
    WorkTitle,
    JobRole,
    WorkDate,
    JobDescription,
  },
  data() {
    return {
      experiences: [
        {
          jobTitle: "Associate Software Engineer",
          company: "T-Mobile",
          city: "Frisco",
          state: "TX",
          startDate: "August 2020",
          endDate: "Present",
          jobRole: "Software Engineer",
          jobDescription: [
            "Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs",
            "Focuses on delivering front-end research, design, and features for internal team product microapps in React and Vue",
            "Works with Azure services, Microsoft Graph API, and added Microsoft Auth to front-end and backend applications",
            "Created Natural Language Processing Python package intended to report non-inclusive words in project repositories",
            "Ensures all front-end and back-end features have adequate unit test, integration test, end-to-end test, and fulfills story requirements",
            "Mentors and leads associate and junior engineers in developing highly efficient and maintainable features while following code standards",
            "Designs and documents expected features for team to develop for intended product",
          ],
        },
        {
          jobTitle: "Software Engineer",
          company: "Surfboard",
          city: "Richardson",
          state: "TX",
          startDate: "June 2019",
          endDate: "Mar 2020",
          jobRole: "Mobile Augmented Reality Development (Android & iOS)",
          jobDescription: [
            "Prototyped persistent world-scale augmented reality using ARCore and ARKit",
            "Prototyped Instagram like gestures for 3D object/text manipulation in ARKit",
            "Designed and documented reusable modules for Android and iOS prototypes using MVC architecture",
            "Used agile methodology and rapid prototyping practices",
          ],
        },
        {
          jobTitle: "Support Analyst Intern",
          company: "Accenture",
          city: "Irving",
          state: "TX",
          startDate: "June 2018",
          endDate: "August 2018",
          jobRole: "DevOps Engineer",
          jobDescription: [
            "Worked in the development of creating a provisioning tool using Terraform, APEX, and RESTful Services, which would drive the provisioning of resources in Oracle Cloud Infrastructure",
            "Created reusable Terraform modules for team use",
          ],
        },
        {
          jobTitle: "C# Unity Programmer",
          company: "SAGA Lab",
          city: "Austin",
          state: "TX",
          startDate: "January 2018",
          endDate: "May 2018",
          jobRole: "Video Game Developer",
          jobDescription: [
            "Worked in the development of creating a provisioning tool using Terraform, APEX, and RESTful Services, which would drive the provisioning of resources in Oracle Cloud Infrastructure",
            "Created reusable Terraform modules for team use",
          ],
        },
      ],
    };
  },
});
</script>
