import TitleHeader from "./TitleHeader.vue";

export default {
  title: "Components/TitleHeader",
  component: TitleHeader,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { TitleHeader },
  setup() {
    return { args };
  },
  template: '<TitleHeader v-bind="args" />',
});

export const TitleHeaderComponent = Template.bind({});
TitleHeaderComponent.args = {
  primary: true,
  label: "TitleHeader",
  title: "Sample Title",
};
