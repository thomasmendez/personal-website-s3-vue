import Date from "../../../types/Date";

interface Project {
  title: string;
  description: string;
  myRole: string;
  myTasks: string[];
  teamSize: number;
  teamRoles: string[] | undefined;
  cloudServices: string[];
  tools: string[];
  projectDuration: string;
  date: Date;
  note: string | undefined;
  media: string;
  mediaAlt: string;
  mediaTitle: string;
  mediaDescription: string;
  website: string;
  repository: string;
  youTubeLink: string;
  downloadLink: string;
}

export default Project;
