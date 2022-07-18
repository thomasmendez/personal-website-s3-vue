import VRARView from "./VRARView.vue";

export default {
  title: "View/VRARView",
  component: VRARView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { VRARView },
  setup() {
    return { args };
  },
  template: '<VRARView v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "VRARView",
};
