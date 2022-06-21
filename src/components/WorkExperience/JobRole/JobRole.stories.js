import JobRole from "./JobRole.vue";

export default {
  title: "Components/WorkExperience/JobRole",
  component: JobRole,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { JobRole },
  setup() {
    return { args };
  },
  template: '<JobRole v-bind="args" />',
});

export const JobRoleComponent = Template.bind({});
JobRoleComponent.args = {
  primary: true,
  label: "JobRole",
  jobRole: "Software Engineer",
};
