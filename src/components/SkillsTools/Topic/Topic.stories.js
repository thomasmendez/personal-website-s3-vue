import Topic from "./Topic.vue";

export default {
  title: "Components/SkillsTools/Topic",
  component: Topic,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Topic },
  setup() {
    return { args };
  },
  template: '<Topic v-bind="args" />',
});

export const TopicComponent = Template.bind({});
TopicComponent.args = {
  primary: true,
  label: "Topic",
  title: "Skills",
};
