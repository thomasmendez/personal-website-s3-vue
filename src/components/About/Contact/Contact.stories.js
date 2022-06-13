import Contact from "./Contact.vue";

export default {
  title: "Components/Contact",
  component: Contact,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { Contact },
  setup() {
    return { args };
  },
  template: '<Contact v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Contact",
};
