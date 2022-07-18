import ProjectSummary from "./ProjectSummary.vue";

export default {
  title: "Components/Projects/ProjectSummary",
  component: ProjectSummary,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => ({
  components: { ProjectSummary },
  setup() {
    return { args };
  },
  template: '<ProjectSummary v-bind="args" />',
});

export const ProjectSummaryStory = Template.bind({});
ProjectSummaryStory.args = {
  primary: true,
  label: "ProjectSummary",
  description:
    "An open source learning management system intended for K-12 educational institutions.",
  myRole: "Software Engineer",
  myTasks: [
    "Developed an open source LMS intended for K-12 educational institutions using the MERN stack",
    "Experienced the entire development lifecycle, deployed, and documented the entire application for both Digital Ocean and AWS",
  ],
  teamSize: 1,
  cloudServices: ["AWS", "Digital Ocean"],
  tools: ["MongoDB", "Express", "React", "Node.js"],
  projectDuration: "3 Months",
  date: {
    startDate: "March 2020",
    endDate: "May 2020",
  },
  note: "This site is no longer avaliable as of May 2021. The site was only intended to be avaliable for a year for demo purposes.",
};
