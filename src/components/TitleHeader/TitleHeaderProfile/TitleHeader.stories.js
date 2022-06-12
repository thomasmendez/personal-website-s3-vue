import TitleHeaderProfile from "./TitleHeaderProfile.vue";

export default {
  title: "Components/TitleHeader/TitleHeaderProfile",
  component: TitleHeaderProfile,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { TitleHeaderProfile },
  setup() {
    return { args };
  },
  template: '<TitleHeaderProfile v-bind="args" />',
});

export const TitleHeaderProfileComponent = Template.bind({});
TitleHeaderProfileComponent.args = {
  primary: true,
  label: "TitleHeaderProfile",
};
