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
  website: string | undefined;
  repository: string | undefined;
  youTubeLink: string | undefined;
  downloadLink: string | undefined;
}

export default Project;
