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
  jobDescriptions: [
    "Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs",
    "Focuses on delivering front-end research, design, and features for internal team product",
    "Works in the development of back-end GraphQL server features for internal team product",
    "Created Python package intended to report non-inclusive words present in a directory and suggest alternative words",
  ],
};
