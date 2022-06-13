import AboutView from "./AboutView.vue";

export default {
  title: "View/AboutView",
  component: AboutView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { AboutView },
  setup() {
    return { args };
  },
  template: '<AboutView v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "AboutView",
};
