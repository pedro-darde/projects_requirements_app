import { Requirement } from "./Requirement";

export type Project = {
  [Key in RequiredFieldsProject]: string
};
export type RequiredFieldsProject = "name" | "start_date" | "release_date";


export type ProjectRequirement = {
  project: Project,
  requirement: Requirement
}

export type ProjectAdded = Project & ProjectRequirement[]