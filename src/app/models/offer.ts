import {Education} from "./education";
import {JobTitle} from "./job-title";
import {Recruiter} from "./recruiter";

export interface Offer {
  title: string;
  description: string;
  city: string;
  salary: number;
  educationId?: number;
  jobTitleId?: number;
  education?: Education;
  jobTitle?: JobTitle
  recruiter?: Recruiter
}
