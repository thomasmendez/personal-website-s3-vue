import WorkTitle from "./WorkTitle.vue";

export default {
  title: "Components/WorkExperience/WorkTitle",
  component: WorkTitle,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { WorkTitle },
  setup() {
    return { args };
  },
  template: '<WorkTitle v-bind="args" />',
});

export const WorkTitleComponent = Template.bind({});
WorkTitleComponent.args = {
  primary: true,
  label: "WorkTitle",
  jobTitle: "Software Engineer",
  company: "Company",
  city: "Dallas",
  state: "TX",
};
