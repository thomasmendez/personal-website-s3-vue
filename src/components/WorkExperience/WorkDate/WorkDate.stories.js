import WorkDate from "./WorkDate.vue";

export default {
  title: "Components/WorkExperience/WorkDate",
  component: WorkDate,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { WorkDate },
  setup() {
    return { args };
  },
  template: '<WorkDate v-bind="args" />',
});

export const WorkDateComponent = Template.bind({});
WorkDateComponent.args = {
  primary: true,
  label: "WorkDate",
  startDate: "August 2020",
  endDate: "Present",
};
