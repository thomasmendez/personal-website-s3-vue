import WorkView from "./WorkView.vue";

export default {
  title: "View/WorkView",
  component: WorkView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { WorkView },
  setup() {
    return { args };
  },
  template: '<WorkView v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "WorkView",
};
