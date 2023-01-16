import JobDescription from "./JobDescription.vue";

export default {
  title: "Components/WorkExperience/JobDescription",
  component: JobDescription,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { JobDescription },
  setup() {
    return { args };
  },
  template: '<JobDescription v-bind="args" />',
});

export const JobDescriptionComponent = Template.bind({});
JobDescriptionComponent.args = {
  primary: true,
  label: "JobDescription",
  jobDescription: [
    "Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs",
    "Focuses on delivering front-end research, design, and features for internal team product microapps in React and Vue",
    "Works with Azure services, Microsoft Graph API, and added Microsoft Auth to front-end and backend applications",
    "Created Natural Language Processing Python package intended to report non-inclusive words in project repositories",
    "Ensures all front-end and back-end features have adequate unit test, integration test, end-to-end test, and fulfills story requirements",
    "Mentors and leads associate and junior engineers in developing highly efficient and maintainable features while following code standards",
    "Designs and documents expected features for team to develop for intended product",
  ],
};
