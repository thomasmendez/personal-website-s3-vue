import SummarySubject from "./SummarySubject.vue";

export default {
  title: "Components/Projects/SummarySubject",
  component: SummarySubject,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { SummarySubject },
  setup() {
    return { args };
  },
  template: '<SummarySubject v-bind="args" />',
});

export const SummarySubjectStory = Template.bind({});
SummarySubjectStory.args = {
  primary: true,
  label: "SummarySubject",
  topicName: "Project Description",
  content:
    "An open source learning management system intended for K-12 educational institutions",
};
