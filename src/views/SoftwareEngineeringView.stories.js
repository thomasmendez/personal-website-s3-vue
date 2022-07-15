import SoftwareEngineeringView from "./SoftwareEngineeringView.vue";

export default {
  title: "View/SoftwareEngineeringView",
  component: SoftwareEngineeringView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { SoftwareEngineeringView },
  setup() {
    return { args };
  },
  template: '<SoftwareEngineeringView v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "SoftwareEngineeringView",
};
