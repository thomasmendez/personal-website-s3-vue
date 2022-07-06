import SkillsToolsView from "./SkillsToolsView.vue";

export default {
  title: "View/SkillsToolsView",
  component: SkillsToolsView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { SkillsToolsView },
  setup() {
    return { args };
  },
  template: '<SkillsToolsView v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "SkillsToolsView",
};
