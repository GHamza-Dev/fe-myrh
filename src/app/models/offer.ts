import {Education} from "./education";
import {JobTitle} from "./job-title";
import {Recruiter} from "./recruiter";

export interface Offer {
  id: number;
  title: string;
  description: string;
  city: string;
  salary: number;
  createdAt: Date;
  educationId?: number;
  jobTitleId?: number;
  education?: Education;
  jobTitle?: JobTitle
  recruiter?: Recruiter
}
