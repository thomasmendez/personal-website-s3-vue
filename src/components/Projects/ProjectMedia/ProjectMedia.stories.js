import ProjectMedia from "./ProjectMedia.vue";
import media from "../../../assets/open-lms-blended-sample.mp4";
export default {
  title: "Components/Projects/ProjectMedia",
  component: ProjectMedia,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { ProjectMedia },
  setup() {
    return { args };
  },
  template: '<ProjectMedia v-bind="args" />',
});

export const ProjectMediaStory = Template.bind({});
ProjectMediaStory.args = {
  primary: true,
  label: "ProjectMedia",
  media: media,
  mediaAlt: "Open-LMS-Blended Video",
  mediaTitle: "Open-LMS-Blended Features",
  mediaDescription:
    "A user is able to create an account, create a course, and upload/manage their syllabus, assignments, class schedule, and lectures. They can also manage their account such as their email, semester, password, or delete their account. Any viewer can view any created courses along with uploaded files.",
  repository: "https://github.com/thomasmendez/open-lms-blended",
};
