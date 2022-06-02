import ContactInfo from "./ContactInfo.vue";

export default {
  title: "Components/ContactInfo",
  component: ContactInfo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { ContactInfo },
  setup() {
    return { args };
  },
  template: '<ContactInfo v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "ContactInfo",
};
