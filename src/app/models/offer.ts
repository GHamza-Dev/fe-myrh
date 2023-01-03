import {Education} from "./education";
import {JobTitle} from "./job-title";

export interface Offer {
  title: string;
  description: string;
  city: string;
  salary: number;
  educationId?: number;
  jobTitleId?: number;
  education?: Education;
  jobTitle?: JobTitle
}
