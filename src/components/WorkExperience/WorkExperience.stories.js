import WorkExperience from "./WorkExperience.vue";

export default {
  title: "Components/WorkExperience",
  component: WorkExperience,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { WorkExperience },
  setup() {
    return { args };
  },
  template: '<WorkExperience v-bind="args" />',
});

export const WorkExperienceComponent = Template.bind({});
WorkExperienceComponent.args = {
  primary: true,
  label: "WorkExperience",
};
