import AboutMe from "./AboutMe.vue";

export default {
  title: "Components/AboutMe",
  component: AboutMe,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { AboutMe },
  setup() {
    return { args };
  },
  template: '<AboutMe v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "AboutMe",
};
